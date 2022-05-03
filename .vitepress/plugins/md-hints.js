'use strict';

////////////////////////////////////////////
//Filter out scripts and styles for special treatment
const RE1  = /^<style(?=(\s|>|$))/i
const RE2  = /^<script\s+setup(?=(\s|>|$))/i
const RE3  = /^<script(?=(\s|>|$))/i
// returns 1, 2, 3 if match RE, 0 otherwise
function _collate(content, hoistedTags) {
  let rc
  if (RE1.test(content)) {
    rc=_combine(content, hoistedTags, 0)
    //console.log('STYLE: ',rc)
    return 1
  }
  if (RE2.test(content)) {
    rc=_combine(content, hoistedTags, 1)
    //console.log('SETUP: ',rc)
    return 2
  }
  if (RE3.test(content)) {
    rc=_combine(content, hoistedTags, 2)
    //console.log('SCRIPT: ',rc)
    return 3
  }
  return 0 // no hoisting needed
}

////////////////////////////////////////////
//append text to the current string
const REPL = /^<([^>]+)>\n?(.*)<\/\w+>$/ims
function _combine(content, hoistedTags, pos) {
  //console.log('found', content)
  let rc=REPL.exec(content.trim())
  if (!rc || rc.length <2) return ''
  // rc[1] is the opening tag, we can ignore it
  hoistedTags[pos] =  ( hoistedTags[pos] || '') + rc[2]
  return rc[2]
}

////////////////////////////////////////////
//epilog hook is called after the core inline parsing
function _epilog_hook(state, startLine, endLine, silent) {
  //we push an epilog token into the document
  var token = new state.Token('epilog_token', 'div', 0);
  state.tokens.push(token);
}

////////////////////////////////////////////
//main entry point
module.exports = function plugin(md, options) {

  ////////////////////////////////////////////
  //there should be an epilog_token at the end of stream
  //we combine all the hoisted scripts together
  function _epilog_render(tokens, idx) {
    const data = (md).__data
    const hoistedTags = data.hoistedTags || (data.hoistedTags = ['','',''])
    //0 is style
    //1 is script setup
    //2 is script
    hoistedTags[0] = "<style>\n" + hoistedTags[0] + "</style>"
    hoistedTags[1] = "<script setup>\n" + hoistedTags[1] + "</script>"
    hoistedTags[2] = "<script>\n" + hoistedTags[2] + "</script>"
    //job done
    console.log('Hint Render\n', hoistedTags)
    return `<!-- EPILOG -->\n`
  }

  ////////////////////////////////////////////
  //new renderer for any HTML_BLOCK token
  //replace the "hoist.js" in official
  //hoist only script and style into md.data
  function _hoist_render(tokens, idx) {
    const data = (md).__data
    const hoistedTags = data.hoistedTags || (data.hoistedTags = ['','',''])
    const content = tokens[idx].content
    if (_collate(content, hoistedTags) > 0) {
      // return empty string
      // scripts and styles are hoisted
      return '<!-- CUSTOM STYLE HOISTED -->'
    }
    else {
      //return original text
      //could be a Custom Component, html tags or comment
      return '<!--CUSTOM START-->' + content + '<!--CUSTOM END-->'
    }
  }

  ////////////////////////////////////////////
  //epilog hooks to the end of main parse,
  md.core.ruler.after('inline', 'epilog', _epilog_hook)
  md.renderer.rules.epilog_token = _epilog_render;

  ////////////////////////////////////////////
  //component detects html_blocks
  //hoist adds them to the md.data
  //md.block.ruler.at('html_block', _block)
  md.renderer.rules.html_block = _hoist_render;
};
