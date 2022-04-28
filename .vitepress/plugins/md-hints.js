'use strict';

// a fenced block $$$ xxxxx $$$
const tag_mark  = '$'
const tag_min = 3

function _split_line(state, startLine) {
  let pos, tag, params, taglen
  let start = state.bMarks[startLine] + state.tShift[startLine]
  let max = state.eMarks[startLine]
  let indent = state.sCount[startLine]
  let blkindent = state.blkIndent
  let code = state.src.charCodeAt(start)
  for (pos = start+1; pos<=max; pos++) {
    if (tag_mark !== state.src[pos]) {break;}
  }
  tag = state.src.slice(start, pos)
  taglen = pos - start
  params = state.src.slice(pos, max)
  return { start, max, code, tag, taglen, params, indent, blkindent }
}


function _parse(state, startLine, nextLine, auto_closed, ptype, tag, params) {
  let old_parent = state.parentType;
  let old_line_max = state.lineMax;
  state.lineMax = nextLine;

  let token    = state.push(ptype + '_open', 'div', 1);
  token.block  = true;
  token.map    = [ startLine, nextLine ];
  token.markup = tag;
  token.info   = params;

  state.parentType = ptype;

  //process startLine+1 to nextLine
  state.md.block.tokenize(state, startLine + 1, nextLine);

  token        = state.push(ptype + '_close', 'div', -1);
  token.block  = true;
  token.markup = tag; //state.src.slice(start, pos);

  state.parentType = old_parent;
  state.lineMax = old_line_max;
  state.line = nextLine + (auto_closed ? 1 : 0);
}

function hintrule(state, startLine, endLine, silent) {
  let tag_code = tag_mark.charCodeAt(0)

  let { start, max, code, tag, taglen, params } = _split_line(state, startLine)
  if (code !== tag_code ) {return false;}
  if (taglen < tag_min) { return false; }
  if (params.trim === '') { return false; }
  if (silent) { return true; }

  //console.log('Rule start @ ', startLine, ' : found ',
  //   tag, ' (', taglen,') | ', params)

  // loop over lines until end of block
  let auto_closed = false
  let nextLine = startLine+1
  for (; nextLine < endLine; nextLine++ ) {
    let { start, max, code, tag, taglen, params, indent, blkindent } = _split_line(state, nextLine)
    if (code !== tag_code) { continue; }
    if (taglen !== tag_min) { continue; }
    if (indent - blkindent >= 4) { continue; }
    if (params.trim === '') { break; }
    if (start < max && indent < blkindent) { break; }
    auto_closed = true; break;
  }

  //console.log('Rule end @ ', nextLine, ' : found ',
  //  tag, ' (', taglen,') | ', params,
  //  ' (', auto_closed, ')' )

  //end of block, either auto-closed or by finding the tag
  _parse(state, startLine, nextLine, auto_closed, 'hint', tag, params)
  return true;
}

function render(tokens, idx) {
  const token = tokens[idx]
  const info = token.info.trim()
  if (token.nesting === 1) {
    return `<div class="tip custom-block">\n
      <p class="custom-block-title">[Component] ${
      info || "Hint"
    }</p>\n<pre>`
  } else {
    return `</pre>\n</div>\n`
  }
}

module.exports = function plugin(md, options) {
  md.block.ruler.before(
    'fence', 'hint', hintrule,
    { alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]}
  );

  md.renderer.rules.hint_open = render;
  md.renderer.rules.hint_close = render;
};

