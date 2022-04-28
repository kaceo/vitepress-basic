//'use strict';
// markdown-plugin-lazy-image
// Process block-level custom containers
//

const name = 'test'
const marker_str  = '$'
const min_markers = 3

function validate(params, markup) {
  return true; // always valid
  return params.trim().split(' ', 2)[0] === name;
}

//========================================================
//block ruler fn(state, startLine, endLine, silent)

function simplecomponent(state, startLine, endLine, silent) {

  var start = state.bMarks[startLine] + state.tShift[startLine]
  var max = state.eMarks[startLine]
  const marker_char = '$' //marker_str // $

  if (state.src.charCodeAt(start)  !== marker_char
  ) { return false; }

  // found marker
  console.log('Called simplecomponent')

  return true;
}

function component(state, startLine, endLine, silent) {

  var pos, nextLine, marker_count,
      markup, params, token,
      old_parent, old_line_max,
      auto_closed = false;

  var start = state.bMarks[startLine] + state.tShift[startLine]
  var max = state.eMarks[startLine]

  // use marker_str, min_markers, name
  var marker_char = marker_str //first letter
  var marker_len  = 1 // length of the string

  //---------------------------------------------
  // check: begin with marker_char
  if (marker_char !== state.src.charCodeAt(start)) { return false; }

  //---------------------------------------------
  // check: the entire line
  for (pos = start + 1; pos <= max; pos++) {
    if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
      break;
    }
  }
  marker_count = Math.floor((pos - start) / marker_len);
  if (marker_count < min_markers) { return false; }
  pos -= (pos - start) % marker_len;

  //---------------------------------------------
  // check: validate() the word
  markup = state.src.slice(start, pos);
  params = state.src.slice(pos, max);
  if (!validate(params, markup)) { return false; }

  //---------------------------------------------
  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  //---------------------------------------------
  // Search for the end of the block
  nextLine = startLine;
  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (start < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }
    if (marker_char !== state.src.charCodeAt(start)) { continue; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }
    for (pos = start + 1; pos <= max; pos++) {
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        break;
      }
    }
    // closing code fence must be at least as long as the opening one
    if (Math.floor((pos - start) / marker_len) < marker_count) { continue; }
    // make sure tail has spaces only
    pos -= (pos - start) % marker_len;
    pos = state.skipSpaces(pos);
    if (pos < max) { continue; }
    // found!
    auto_closed = true;
    break;
  }

  //---------------------------------------------
  // found the end of the block, change the entire block to type
  old_parent = state.parentType;
  old_line_max = state.lineMax;
  state.parentType = 'compo';

  // this will prevent lazy continuations from ever going past our end marker
  state.lineMax = nextLine;

  token        = state.push('compo_open', 'div', 1);
  token.markup = markup;
  token.block  = true;
  token.info   = params;
  token.map    = [ startLine, nextLine ];

  state.md.block.tokenize(state, startLine + 1, nextLine);

  token        = state.push('compo_close', 'div', -1);
  token.markup = state.src.slice(start, pos);
  token.block  = true;

  state.parentType = old_parent;
  state.lineMax = old_line_max;
  state.line = nextLine + (auto_closed ? 1 : 0);

  return true;
}


//========================================================
//call renderfn (tokens, idx, options, env, renderer)

// add class="xxx" to the opening tag
function boxrender(tokens, idx, _options, env, slf) {
  let klass = 'outline'
  if (tokens[idx].nesting === 1) {
    tokens[idx].attrJoin('class', klass);
  }
  return slf.renderToken(tokens, idx, _options, env, slf);
}

// add v-pre to opening tag
function coderender(tokens, idx) {
  if (tokens[idx].nesting === 1) {
    return `<div v-pre>\n`
  } else {
    return `</div>\n`
  }
}

// add div.{klass}.custom-block and p.custom-block-title ${klass} to opening tag
// ::: klass info...
function newrender(tokens, idx) {
  let klass = 'compo'
  const token = tokens[idx]
  const info = token.info.trim().slice(klass.length).trim()
  if (token.nesting === 1) {
    return `<div class="${klass} custom-block">\n<p class="custom-block-title">${
      info || klass
    }</p>\n`
  } else {
    return `</div>\n`
  }
}


//========================================================

module.exports = function plugin(md, options) {
  var rule = simplecomponent //component
  md.block.ruler.before(
    'fence', 'compo', rule,
    { alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]}
  );

  var render = coderender // boxrender newrender
  md.renderer.rules.compo_open = render;
  md.renderer.rules.compo_close = render;
};

/*
  md.block.ruler.before(
    'paragraph',
    'deflist', deflist,
    {alt: ['paragraph', 'reference', 'blockquote']}
  )
  function deflist(state, startLine, endLine, silent)

====================================================================
const placeholderImg = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs='

var pluginOptions = md.utils.assign(
  { placeholder: placeholderImg },
  options || {}
)

var defaultImageRenderer = md.renderer.rules.image;

md.renderer.rules.image = function (tokens, idx, options, env, self) {
  var token = tokens[idx];
  var srcValue = token.attrGet('src');
  token.attrPush(['data-src', srcValue]);
  token.attrSet('src', pluginOptions.placeholder);
  return defaultImageRenderer(tokens, idx, options, env, self);
};

md.use(require('markdown-it-container'), 'spoiler', {

  validate: function(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

    } else {
      // closing tag
      return '</details>\n';
    }
  }
});
console.log(md.render('
::: spoiler click me\n
*content*\n
:::\n'));
// Output:
//
// <details><summary>click me</summary>
// <p><em>content</em></p>
// </details>
*/

