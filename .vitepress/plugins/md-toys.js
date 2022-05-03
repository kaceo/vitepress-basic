// Process hint vars
'use strict';
const name='hint'


////////////////////////////////////////////////////////////////////////////////
// Renderer partials (tokens, idx, _options, env, self)
////////////////////////////////////////////////////////////////////////////////

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
// What to do about a Fenced section?
// fence begins ``` hint more nonsense
// fence ends   ```
// text inside the fence is not escaped or parsed as markdown
//
////////////////////////////////////////////////////////////////////////////////
function defaultRender(tokens, idx, _options, env, self) {
  // hint is a self closing tag
  const caption = '<i>Alice is "like" a </i> Child'

  var token = tokens[idx]
  //token.nesting = 0
  token.attrPush([':href', 'var1'])
  token.attrPush(['caption', caption])

console.log(token)
  // output the current tag by nesting
  // as open (1), close (-1), or self-close (0)
  // attributes name = value
  return self.renderToken(tokens, idx, _options, env, self)
}

function defaultValidate(name, params) {
  return params.trim().split(' ', 2)[0] === name
}

function _hook_hint(state, startLine, endLine, silent){
  const validate=defaultValidate
  const optionMarker = '`'
  const name='hint'
  let haveEndMarker = false

  //-------------------------------------------------
  //stage-1: find the fence block
  //-------------------------------------------------
  // return false = not a fence block

  //check-1: if indenting
  if (state.sCount[startLine] - state.blkIndent >= 4) return false

  let pos = state.bMarks[startLine] + state.tShift[startLine]
  let max = state.eMarks[startLine]

  //check-2: line shorter than 3 chars
  if (pos + 3 > max) return false

  //check-3: line start is not optionMarker
  const marker = state.src.charCodeAt(pos)
  if (marker !== optionMarker.charCodeAt(0)) return false

  //check-4: line skip optionMarker is less than 3 chars
  let mem = pos
  pos = state.skipChars(pos, marker)
  let len = pos - mem
  if (len < 3) return false

  //break line into (``` markup) and (rest of line)
  const markup = state.src.slice(mem, pos)
  const params = state.src.slice(pos, max)

  //check-5: params has optionMarker
  if (params.indexOf(String.fromCharCode(marker)) >= 0) return false

  //start of block found!
  //check every subsequent line for end
  let nextLine = startLine
  for (;;) {
    nextLine++
    if (nextLine >= endLine) break

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine]
    max = state.eMarks[nextLine]

    //check-6: if change indent level
    if (pos < max && state.sCount[nextLine] < state.blkIndent) break
    if (state.sCount[nextLine] - state.blkIndent >= 4) continue

    //check-7: not starting with optionMarker
    if (state.src.charCodeAt(pos) !== marker) continue

    pos = state.skipChars(pos, marker)
    if (pos - mem < len) continue
    pos = state.skipSpaces(pos)
    if (pos < max) continue

    haveEndMarker = true
    break
  }
  len = state.sCount[startLine]
  state.line = nextLine + (haveEndMarker ? 1 : 0)

  //-------------------------------------------------
  //stage-2: update the syntax token
  //-------------------------------------------------
console.log('**FOUND FENCE BLOCK**\n')
  //a fenced section found, is it mine?
  let token
  if (validate(name, params)) {
console.log('**is Hint**\n')
    token = state.push(name, 'div', 0)
  } else {
console.log('**is Not Hint**\n')
    token = state.push('fence', 'code', 0)
  }

  //rest of the token
  token.map = [startLine, state.line]
  token.markup = markup
  token.info = params
  token.content = state.getLines(startLine + 1, nextLine, len, true)

  return true
}


////////////////////////////////////////////////////////////////////////////////
function _hook_epilog(state) {
  var token = new state.Token('epilog_block', 'footer', 0);
  state.tokens.push(token);
}

function _render_epilog(tokens, idx) {
  var numhints = 3
  // only if epilog_block is encounted
  //console.log('Epilog reached')
  //console.log(tokens)

  let str = "EPILOG -- " + numhints
  str += numhints>1 ? " hints" : " hint"

  return "\n<!-- "+str+" -->\n"
}



////////////////////////////////////////////////////////////////////////////////
module.exports = function plugin(md) {
  //name, opts

  //================================
  // token = "hint"
  md.block.ruler.before('fence', name, _hook_hint,
    { alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]}
  );
  md.renderer.rules[name] = defaultRender

  //================================
  // token = "epilog_block"
  md.core.ruler.after('inline', 'epilog', _hook_epilog)
  md.renderer.rules.epilog_block = _render_epilog

}







/*
  Token {
    type: 'fence', 'hint',
    tag: 'code', 'div',
    nesting: 0 selfclose, 1 open, -1 close
    attrs: null, [
      ["class", "hint"],
      [":href", "var1"],
      ["caption", "text stuffs"],
    ]
    markup: '```',
    info: '', ' hint',
    content: '# Header1\n',
             'test *this* special\n\ngood\n',
    level: 0,
    map: [ 11, 14 ],
    children: null,
    meta: null,
    block: true,
    hidden: false
  },

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
  */

  //== State Rules ==========================================
  /*
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

*/

