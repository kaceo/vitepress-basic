'use strict';
// "markdown-it-fontawesome"
// needs to have fontawesome css loaded to work
//
// "markdown-it-mdi"
// needs to have mdi icon css loaded to work

const RegExPlugin = require('markdown-it-regexp')

// :fa-xxxx:  becomes i.fa.fa-xxxx
const plugin_fa = RegExPlugin(
  /\:fa-([\w\-]+)\:/,
  function (match, utils) {
    return '<i class="fa fa-'
    + utils.escape(match[1])
    + '"></i>';
  },
)

// :fax-xxxx: becomes i.fax.fa-xxxx
const plugin_fax = RegExPlugin(
  /\:fa([\w])-([\w\-]+)\:/,
  function (match, utils) {
    return '<i class="fa'
    + utils.escape(match[1])
    + ' fa-' + utils.escape(match[2])
    + '"></i>';
  },
)


// :mdi-xxxx:  becomes i.mdi.mdi-xxxx
const plugin_mdi = RegExPlugin(
  /\:mdi-([\w\-]+)\:/,
  function (match, utils) {
    return '<i class="mdi mdi-'
    + utils.escape(match[1])
    + '"></i>';
  },
)

module.exports = function (md, options) {
  // MDI style icons
	md.use(plugin_mdi)

  // FA4 style icons
	md.use(plugin_fa)

  // FA5 style icons
  md.use(plugin_fax)
};


/*

@xxx => <a href="http://example.org/u/xxxx">xxxxx</a>

var plugin = Plugin(
  // regexp to match
  /@(\w+)/,
  // this function will be called when something matches
  function(match, utils) {
    var url = 'http://example.org/u/' + match[1]
    return '<a href="' + utils.escape(url) + '">'
         + utils.escape(match[1])
         + '</a>'
  }
)

md()
  .use(plugin)
  .render("hello @user")
*/
