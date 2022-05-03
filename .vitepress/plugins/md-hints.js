/*************************************
 * md-hints.js: a direct upgrade replacement for
 * vitepress' src/node/markdown/plugins/hoist.ts
 * or it can be installed as an extra markdown-it
 * plugin through the user's .vitepress/config.js
 *
 * markdown: {
 *   config: (md) => {
 *     md.use(require("md-hints.js"))
 *   }
 * }
 *
 * This version allows the Markdown file to contain
 * multiple Vue sections of <Script> and/or <Style>,
 * and the renderer will combine them automatically
 * into one <Script>, <Script Setup> and <Style>
 *
 * Hence making the use of Vite import statements
 * easier as they can always be placed next to the
 * position of the Custom Components in the MD text:
 *
 * <script setup>
 * import pix1 from "./images/mypix.png"
 * </script>
 * <CustomComponent :src="pix1" />
 *
 * CAVEAT:
 * This plugin can only be used within Vitepress
 * because detecting <script> and <style> is done
 * in src/node/markdown/plugins/components.ts
 * Using this as a general Markdown-it plugin, it
 * is necessary also to replace the syntax hooks
 * to md.block.ruler.at('html_block', _block)
 *
 ************************************/

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
  let rc=REPL.exec(content.trim())
  if (!rc || rc.length <2) return ''
  // rc[1] is the opening tag, we can ignore it
  // rc[2] is the innerHTML, append string
  hoistedTags[pos] =  ( hoistedTags[pos] || '') + rc[2]
  return rc[2]
}

////////////////////////////////////////////
//epilog hook is called at end of core inline parsing
function _epilog_hook(state, startLine, endLine, silent) {
  //we push an epilog token into the document
  var token = new state.Token('epilog_token', 'div', 0);
  state.tokens.push(token);
}

////////////////////////////////////////////
//main entry point
module.exports = function plugin(md, options) {

  ////////////////////////////////////////////
  //new renderer for HTML_BLOCK token
  //replaces the "hoist.js" in official repo
  //hoist script and style into md.data
  function _hoist_render(tokens, idx) {
    const data = (md).__data
    const hoistedTags = data.hoistedTags || (data.hoistedTags = ['','',''])
    const content = tokens[idx].content
    if (_collate(content, hoistedTags) > 0) {
      //scripts and styles are hoisted
      //return empty string
      return '<!-- CUSTOM STYLE HOISTED -->'
    }
    else {
      //Custom Component, html tags or comment
      //return original text as is
      return '<!--CUSTOM START-->' + content + '<!--CUSTOM END-->'
    }
  }

  ////////////////////////////////////////////
  //at the end of stream we combine all the
  //hoisted scripts together
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
  //Vitepress
  //src/node/markdown/plugins/component.ts detects html_blocks
  //src/node/markdown/plugins/hoist.ts adds to the md.data
  //md.block.ruler.at('html_block', _block)
  md.renderer.rules.html_block = _hoist_render;

  ////////////////////////////////////////////
  //epilog hooks to the end of main parse,
  md.core.ruler.after('inline', 'epilog', _epilog_hook)
  md.renderer.rules.epilog_token = _epilog_render;
};
