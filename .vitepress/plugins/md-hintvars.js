// Process hint vars
'use strict';

////////////////////////////////////////////////////////////////////////////////
// Renderer partials

function _footnote_ref(tokens, idx) {
  var n = Number(tokens[idx].meta.id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].meta.subId > 0) {
    id += ':' + tokens[idx].meta.subId;
  }
  return '<sup class="footnote-ref"><a href="#fn'
  + n + '" id="' + id + '">[' + n
  + ']</a></sup>';
}

function _footnote_anchor(tokens, idx) {
  var n = Number(tokens[idx].meta.id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].meta.subId > 0) {
    id += ':' + tokens[idx].meta.subId;
  }
  return ' <a href="#' + id
  + '" class="footnote-backref">\u21a9</a>'; /* ↩ */
}

function _footnote_block_open(tokens, idx, options) {
  return '<div class="footnotes">\n' +
         (options.xhtmlOut ? '<hr class="footnotes-sep" />\n'
                           : '<hr class="footnotes-sep">\n'
         ) + '<ol class="footnotes-list">\n';
}

function _footnote_block_close() {
  return '</ol>\n</div>\n';
}

function _footnote_open(tokens, idx) {
  var id = Number(tokens[idx].meta.id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
}

function _footnote_close() {
  return '</li>\n';
}

////////////////////////////////////////////////////////////////////////////////


module.exports = function sub_plugin(md) {

  //== Token Rendering =======================================
  md.renderer.rules.footnote_ref          = _footnote_ref;
  // returns sup.footnote-ref a#fnrefxx(href=#fnxx) [xx]

  md.renderer.rules.footnote_anchor       = _footnote_anchor;
  // returns a.footnote-backref(href=#fnrefxx) <--

  md.renderer.rules.footnote_open         = _footnote_open;
  // returns li.footnote-item#fnxx

  md.renderer.rules.footnote_close        = _footnote_close;
  // returns /li

  md.renderer.rules.footnote_block_open   = _footnote_block_open;
  // returns div.footnotes hr.footnotes-sep ol.footnotes-list

  md.renderer.rules.footnote_block_close  = _footnote_block_close;
  // returns /ol /div

  //== State Rules ==========================================
  md.block.ruler.before('reference',
    'footnote_def', footnote_def,
    { alt: [ 'paragraph', 'reference' ] }
  );
  // blocks define footnotes

  md.inline.ruler.after('image',
    'footnote_inline', footnote_inline
  );
  // inline image can point to footnote

  md.inline.ruler.after('footnote_inline',
    'footnote_ref', footnote_ref
  );
  // inline text can point to footnote

  md.core.ruler.after('inline',
    'footnote_tail', footnote_tail
  );
  // core after inline, can do the tail div


  ////////////////////////////////////////////////////////////////////////////////
  // Rules partials

  //== Token Rendering ====
  var parseLinkLabel = md.helpers.parseLinkLabel,
      isSpace = md.utils.isSpace;

  //---------------------------------------------------------
  // Process footnote block definition
  // blocks of footnotes begin with [^xxx]
  // ends with paragraph end
  function footnote_def(state, startLine, endLine, silent) {
    var oldBMark, oldTShift, oldSCount, oldParentType,
        pos, label, token,
        initial, offset, ch, posAfterColon,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // line should be at least 5 chars - "[^x]:"
    if (start + 4 > max) { return false; }
    // [
    if (state.src.charCodeAt(start) !== 0x5B) { return false; }
    // ^
    if (state.src.charCodeAt(start + 1) !== 0x5E) { return false; }
    // find end of footnote mark, not space
    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 0x20) { return false; }
      // ]
      if (state.src.charCodeAt(pos) === 0x5D ) { break; }
    }
    // [^] is invalid, no empty footnote labels
    if (pos === start + 2) { return false; }
    // :
    if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A ) { return false; }
    if (silent) { return true; }

    // found [^xxx]: so process this
    pos++;
    if (!state.env.footnotes) { state.env.footnotes = {}; }
    if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
    // label is the footnote id
    label = state.src.slice(start + 2, pos - 2);
    state.env.footnotes.refs[':' + label] = -1;

    // state.env remembers all the notes
    // .footnotes.refs[:label] = -1
    // new token 'footnote_reference_open'
    //    .meta = { label }, .level

    // push a footnote_reference_open token
    token       = new state.Token('footnote_reference_open', '', 1);
    token.meta  = { label: label };
    token.level = state.level++;
    state.tokens.push(token);

    // scan over the rest of the footnote until end of block
    oldBMark = state.bMarks[startLine];
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine];
    oldParentType = state.parentType;
    posAfterColon = pos;
    initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);
      //isSpace is md.utils.isSpace
      if (isSpace(ch)) {
        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
      } else {
        break;
      }
      pos++;
    }

    state.tShift[startLine] = pos - posAfterColon;
    state.sCount[startLine] = offset - initial;
    state.bMarks[startLine] = posAfterColon;
    state.blkIndent += 4;
    state.parentType = 'footnote';

    if (state.sCount[startLine] < state.blkIndent) {
      state.sCount[startLine] += state.blkIndent;
    }

    // recurse the tokenize of startLine to endLine
    // under parentType = footnote
    state.md.block.tokenize(state, startLine, endLine, true);

    // push a footnote_reference_close token
    state.parentType = oldParentType;
    state.blkIndent -= 4;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.bMarks[startLine] = oldBMark;
    token       = new state.Token('footnote_reference_close', '', -1);
    token.level = --state.level;
    state.tokens.push(token);

    return true;
  }

  //---------------------------------------------------------
  // Process inline footnotes (^[...])
  function footnote_inline(state, silent) {
    var labelStart,
        labelEnd,
        footnoteId,
        token,
        tokens,
        max = state.posMax,
        start = state.pos;

    if (start + 2 >= max) { return false; }
    if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }

    labelStart = start + 2;
    labelEnd = parseLinkLabel(state, start + 1);

    // parser failed to find ']', so it's not a valid note
    if (labelEnd < 0) { return false; }

    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      if (!state.env.footnotes) { state.env.footnotes = {}; }
      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
      footnoteId = state.env.footnotes.list.length;

      state.md.inline.parse(
        state.src.slice(labelStart, labelEnd),
        state.md,
        state.env,
        tokens = []
      );

      token      = state.push('footnote_ref', '', 0);
      token.meta = { id: footnoteId };

      state.env.footnotes.list[footnoteId] = { tokens: tokens };
    }

    state.pos = labelEnd + 1;
    state.posMax = max;
    return true;
  }

  //---------------------------------------------------------
  // Process footnote references ([^...])
  function footnote_ref(state, silent) {
    var label,
        pos,
        footnoteId,
        footnoteSubId,
        token,
        max = state.posMax,
        start = state.pos;

    // should be at least 4 chars - "[^x]"
    if (start + 3 > max) { return false; }

    if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
    if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }

    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 0x20) { return false; }
      if (state.src.charCodeAt(pos) === 0x0A) { return false; }
      if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
        break;
      }
    }

    if (pos === start + 2) { return false; } // no empty footnote labels
    if (pos >= max) { return false; }
    pos++;

    label = state.src.slice(start + 2, pos - 1);
    if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

    if (!silent) {
      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

      if (state.env.footnotes.refs[':' + label] < 0) {
        footnoteId = state.env.footnotes.list.length;
        state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
        state.env.footnotes.refs[':' + label] = footnoteId;
      } else {
        footnoteId = state.env.footnotes.refs[':' + label];
      }

      footnoteSubId = state.env.footnotes.list[footnoteId].count;
      state.env.footnotes.list[footnoteId].count++;

      token      = state.push('footnote_ref', '', 0);
      token.meta = { id: footnoteId, subId: footnoteSubId };
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  }

  //---------------------------------------------------------
  // Glue footnote tokens to end of token stream
  // call only at the end of core processing
  function footnote_tail(state) {
    var i, l, j, t, lastParagraph, list, token, tokens, current, currentLabel,
        insideRef = false,
        refTokens = {};

    // no footnotes? do nothing
    if (!state.env.footnotes) { return; }

    state.tokens = state.tokens.filter(function(tok) {
      if (tok.type === 'footnote_reference_open') {
        insideRef = true;
        current = [];
        currentLabel = tok.meta.label;
        return false;
      }
      if (tok.type === 'footnote_reference_close') {
        insideRef = false;
        // prepend ':' to avoid conflict with Object.prototype members
        refTokens[':' + currentLabel] = current;
        return false;
      }
      if (insideRef) { current.push(tok); }
      return !insideRef;
    });

    if (!state.env.footnotes.list) { return; }
    list = state.env.footnotes.list;

    token = new state.Token('footnote_block_open', '', 1);
    state.tokens.push(token);

    for (i = 0, l = list.length; i < l; i++) {
      token      = new state.Token('footnote_open', '', 1);
      token.meta = { id: i };
      state.tokens.push(token);

      if (list[i].tokens) {
        tokens = [];

        token          = new state.Token('paragraph_open', 'p', 1);
        token.block    = true;
        tokens.push(token);

        token          = new state.Token('inline', '', 0);
        token.children = list[i].tokens;
        token.content  = '';
        tokens.push(token);

        token          = new state.Token('paragraph_close', 'p', -1);
        token.block    = true;
        tokens.push(token);

      } else if (list[i].label) {
        tokens = refTokens[':' + list[i].label];
      }

      state.tokens = state.tokens.concat(tokens);
      if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
        lastParagraph = state.tokens.pop();
      } else {
        lastParagraph = null;
      }

      t = list[i].count > 0 ? list[i].count : 1;
      for (j = 0; j < t; j++) {
        token      = new state.Token('footnote_anchor', '', 0);
        token.meta = { id: i, subId: j };
        state.tokens.push(token);
      }

      if (lastParagraph) {
        state.tokens.push(lastParagraph);
      }

      token = new state.Token('footnote_close', '', -1);
      state.tokens.push(token);
    }

    token = new state.Token('footnote_block_close', '', -1);
    state.tokens.push(token);
  }



};


/*******************************
core
    core.rule1 (normalize)
    ...
    core.ruleX

    block
        block.rule1 (blockquote)
        ...
        block.ruleX

    core.ruleX1 (intermediate rule that applies on block tokens, nothing yet)
    ...
    core.ruleXX

    inline (applied to each block token with "inline" type)
        inline.rule1 (text)
        ...
        inline.ruleX

    core.ruleYY (applies to all tokens)
    ... (abbreviation, footnote, typographer, linkifier)

----

env sandbox

tokens
  type
  tag
  attrs
  map (source map)
  nesting 1=opening, 0=self-closing, -1=closing
  level
  children
  content
  markup
  info (fence token, link_open => auto)
  meta (arbitrary)
  block
  hidden


 */


function yourPlugin (md, options) {
  return markdownitfence(md,
    'yourPluginName', {    // name
    marker: yourMarker,    // default is '`'
    render: yourRender,    // defaultRender
    validate: yourValidate // defaultValidate
  })
}

'use strict'

export default function (md, name, opts) {
  function defaultValidate(params) {
    return params.trim().split(' ', 2)[0] === name
  }

  function defaultRender(tokens, idx, _options, env, self) {
    if (tokens[idx].nesting === 1) {
      tokens[idx].attrPush(['class', name])
    }

    return self.renderToken(tokens, idx, _options, env, self)
  }

  const options = Object.assign({
    validate: defaultValidate,
    render: defaultRender
  }, opts)

  function fence(state, startLine, endLine) {
    const optionMarker = options.marker || '`'
    let pos = state.bMarks[startLine] + state.tShift[startLine]
    let max = state.eMarks[startLine]
    let haveEndMarker = false

    if (state.sCount[startLine] - state.blkIndent >= 4) return false
    if (pos + 3 > max) return false

    const marker = state.src.charCodeAt(pos)

    if (marker !== optionMarker.charCodeAt(0)) return false

    let mem = pos
    pos = state.skipChars(pos, marker)
    let len = pos - mem

    if (len < 3) return false

    const markup = state.src.slice(mem, pos)
    const params = state.src.slice(pos, max)

    if (params.indexOf(String.fromCharCode(marker)) >= 0) return false

    let nextLine = startLine

    for (;;) {
      nextLine++
      if (nextLine >= endLine) break

      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine]
      max = state.eMarks[nextLine]

      if (pos < max && state.sCount[nextLine] < state.blkIndent) break
      if (state.src.charCodeAt(pos) !== marker) continue
      if (state.sCount[nextLine] - state.blkIndent >= 4) continue

      pos = state.skipChars(pos, marker)

      if (pos - mem < len) continue

      pos = state.skipSpaces(pos)

      if (pos < max) continue

      haveEndMarker = true

      break
    }

    len = state.sCount[startLine]
    state.line = nextLine + (haveEndMarker ? 1 : 0)

    let token
    if (options.validate(params)) token = state.push(name, 'div', 0)
    else token = state.push('fence', 'code', 0)
    token.info = params
    token.content = state.getLines(startLine + 1, nextLine, len, true)
    token.markup = markup
    token.map = [startLine, state.line]

    return true
  }

  md.block.ruler.before('fence', name, fence, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']})
  md.renderer.rules[name] = options.render
}



/*
  //-----------------------------
  replace html_block rule with expanded expressions:
  1. <component>
     </component>
  2. <(script|pre|style)>
     </(script|pre|style)>
  3. <!--
     -->
  4. <?
     ?>
  5. <!A-Z
     >
  6. <![CDATA[
     ]
  7. <A-Z
     >
  8. <\w-
     >
  9. blocknames
  10. HTML_OPEN_CLOSE_TAG_RE

  //-----------------------------
  replace html_block rendering:
  tokens[idx].content
  - if script or style --> push into hoistedTags[]
  - else output as html

  //-----------------------------
  VueSFC --
  any script ok
  script setup max=1
  script max=1
*/
