import { parseHeader } from '../utils/parseHeader'
import { Header } from '../shared'

import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import attrs from 'markdown-it-attrs'
import emoji from 'markdown-it-emoji'
import toc from 'markdown-it-table-of-contents'

import { componentPlugin } from './plugins/component'
import { containerPlugin } from './plugins/containers'
import { headingPlugin } from './plugins/headings'
import { highlight } from './plugins/highlight'
import { highlightLinePlugin } from './plugins/highlightLines'
import { hoistPlugin } from './plugins/hoist'
import { imagePlugin } from './plugins/image'
import { lineNumberPlugin } from './plugins/lineNumbers'
import { linkPlugin } from './plugins/link'
import { preWrapperPlugin } from './plugins/preWrapper'
import { slugify } from './plugins/slugify'
import { snippetPlugin } from './plugins/snippet'

export interface MarkdownOptions extends MarkdownIt.Options {
  lineNumbers?: boolean
  config?: (md: MarkdownIt) => void
  anchor?: {
    permalink?: anchor.AnchorOptions['permalink']
  }
  attrs?: {
    leftDelimiter?: string
    rightDelimiter?: string
    allowedAttributes?: string[]
  }
  // https://github.com/Oktavilla/markdown-it-table-of-contents
  toc?: any
  externalLinks?: Record<string, string>
}

export interface MarkdownParsedData {
  hoistedTags?: string[]
  links?: string[]
  headers?: Header[]
}

export interface MarkdownRenderer extends MarkdownIt {
  __path: string
  __relativePath: string
  __data: MarkdownParsedData
}

export type { Header }

export const createMarkdownRenderer = (
  srcDir: string,
  options: MarkdownOptions = {},
  base: string
): MarkdownRenderer => {

  // 12 highlight.ts
  const md = MarkdownIt({
    html: true,
    linkify: true,
    highlight,
    ...options
  }) as MarkdownRenderer

  // 1 component.ts
  md
    .use(componentPlugin)

  // 2 highlightLines.ts
    .use(highlightLinePlugin)

  // 3 preWrapper.ts
    .use(preWrapperPlugin)

  // 4 snippet.ts
    .use(snippetPlugin, srcDir)

  // 5 hoist.ts
    .use(hoistPlugin)

  // 6 containers.ts
    .use(containerPlugin)

  // 7 headings.ts
    .use(headingPlugin)

  // 8 image.ts
    .use(imagePlugin)

  // 9 link.ts
    .use(linkPlugin, {
        target: '_blank',
        rel: 'noopener noreferrer',
        ...options.externalLinks
      }, base)

  // markdown-it-attrs
    .use(attrs, options.attrs)

  // markdown-it-anchor
  // 11 slugify.ts
    .use(anchor, {
      slugify,
      permalink: anchor.permalink.ariaHidden({}),
      ...options.anchor
    })

  // markdown-it-table-of-content
  // 11 slugify.ts
    .use(toc, {
      slugify,
      includeLevel: [2, 3],
      format: parseHeader,
      ...options.toc
    })

  // markdown-it-emoji
    .use(emoji)

  // apply user config
  // .use(cicons) // icons fa, mdi
  // .use(chints) // asset hints
  // .use(fn) // footnotes
  // .use(dl) // deflists
  if (options.config) {
    options.config(md)
  }

  // 10 lineNumbers.ts
  if (options.lineNumbers) {
    md.use(lineNumberPlugin)
  }

  const originalRender = md.render
  md.render = (...args) => {
    md.__data = {}
    return originalRender.call(md, ...args)
  }

  return md
}
