'use strict';
// replaces "markdown-it-fontawesome"
// replaces "markdown-it-mdi"

const RegExPlugin = require('markdown-it-regexp')

// :mdi-xxxx:  becomes i.mdi.mdi-xxxx
const expr_mdi = RegExPlugin(
  /\:mdi-([\w\-]+)\:/,
  function (match, utils) {
    return '<i class="mdi mdi-'
    + utils.escape(match[1])
    + '"></i>';
  },
)

// :fa-xxxx:  becomes i.fa.fa-xxxx
const expr_fa = RegExPlugin(
  /\:fa-([\w\-]+)\:/,
  function (match, utils) {
    return '<i class="fa fa-'
    + utils.escape(match[1])
    + '"></i>';
  },
)

// :fax-xxxx: becomes i.fax.fa-xxxx
const expr_fax = RegExPlugin(
  /\:fa([\w])-([\w\-]+)\:/,
  function (match, utils) {
    return '<i class="fa'
    + utils.escape(match[1])
    + ' fa-' + utils.escape(match[2])
    + '"></i>';
  },
)

module.exports = function (md, options) {
  // MDI style
	md.use(expr_mdi)
  // FA4 style
	md.use(expr_fa)
  // FA5 style
  md.use(expr_fax)
};

/*

// plugin-mention (twitter mention)

@xxxxxx becomes twitter/@xxxxxx
const expr_twit = RegExPlugin(
  /@(\w+)/,
  function (match, utils) {
    return '<a href="'
    + utils.escape('https://twitter.com/@' + match[1])
    + '" target="' + (config.external ? '_blank' : '_self')
    + '">@' + match[1] + '</a>';
  }
)

// plugin-hint (raise hint to Vite)
:::var abc = "./my/file.png"
becomes
import abc from "./my/file.png"
but this code has to be added to the script block and hoisted
to the top

*/
