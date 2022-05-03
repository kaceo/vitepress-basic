const src = `
# Hello

\`\`\` hint
import _tmp1 from './book/images/illustration-4.png'
//do you know how to do this?
const m = ref(0)
var a=2+3

//test *this* special
//
//good
\`\`\`
<Xfigure
  :src='_tmp1'
  caption="My special book"
  :alt="m"+a
><p>This is a test</p>
</Xfigure>

My Bad

\`\`\`
# Header1
\`\`\`
### Header3



`
/*
[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraph.
  Indent paragraph to include them in the footnote.
  { my code}
  Add as many paragraph as you like.


<style lang="sass">
.name {
  font-size: 10px;
}
</style>

Good bye :smile:
Nice :fab-google:

<script>
function increment() {
  console.log('Hello')
}
</script>


==Here's== a simple footnote,[^1] and here's a longer one.[^bignote]

import file from './my/pix'

<component ImageOwn>
var src = "./pix/myfile.png"
var caption="Hello Everybody! *kiss* *kiss*"
<code :pix="src" :caption="caption"
/>
</component>

$$$ does amu this work?
Let me know! what you have
$$$
<script>
function decrement() {
  console.log('Goodbye')
}
</script>


More here

<script setup>
const x = 10
</script>
*/

const md = require('markdown-it')({
  xhtmlOut: true,
  html: true,
})
//const md1 = require('../plugins/md-components')
//const md2 = require('../plugins/md-hoist')
//const md3 = require('../plugins/md-footnote')
//const md4 = require('../plugins/md-image')

const md9 = require('../plugins/md-toys')
md
//  .use(md1)
//  .use(md2)
//  .use(md3)
//  .use(md4)
  .use(md9)

console.log( "&&&&&&&&&&&&&&&\n")
console.log( md.render(src) )
console.log( "=====\n", md.__data )


