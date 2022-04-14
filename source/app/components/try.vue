<template lang="pug">
body.flex.flex-col.min-h-screen.dark:bg-gray-900.dark:text-gray-100.transition-colors.duration-500

  header.w-full.px-4.pt-4 max-w-5xl.mx-auto
    nav.flex.items-center.justify-between.flex-wrap
      .flex.gap-2.items-center

        a(href="mailto:name@example.com"
          aria-label="EMail")
          svg(xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round")
            path(stroke="none"
              d="M0 0h24v24H0z"
              fill="none")
            circle(cx="12"
              cy="12"
              r="4")
            path(d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28")

        a.flex.items-center.font-bold(
          href="https://showfolio.vercel.app/"
        ) Showfolio Theme

      ul#nav-menu.flex.w-auto.mt-0.space-x-2
        li
          a.hover:text-blue-800.dark:hover:text-blue-300(
            href="https://showfolio.vercel.app/about/"
          ) About Me
        li
          a.hover:text-blue-800.dark:hover:text-blue-300(
            href="https://showfolio.vercel.app/blog/"
          ) Blog

  main.flex-1.mx-4.md:mx-12.lg:mx-24.mt-8.sm:mt-16
    article.mb-16.max-w-5xl.mx-auto.px-4.prose.lg:prose-lg.prose-blue.dark:prose-dark
      h1.font-bold.text-3xl About Me
      p
        | Written in Go, Hugo is an open source static site generator
        | available under the
        a(href="https://github.com/gohugoio/hugo/blob/master/LICENSE") Apache Licence 2.0.
        | Hugo supports TOML, YAML and JSON data file types,
        | Markdown and HTML content files and uses shortcodes to add
        | rich content. Other notable features are taxonomies,
        | multilingual mode, image processing, custom output formats,
        | HTML/CSS/JS minification and support for Sass SCSS workflows.

      p.
        Hugo makes use of a variety of open source projects including:

      ul
        li
          a(href="https://github.com/yuin/goldmark") https://github.com/yuin/goldmark
        li
          a(href="https://github.com/alecthomas/chroma") https://github.com/alecthomas/chroma
        li
          a(href="https://github.com/muesli/smartcrop") https://github.com/muesli/smartcrop
        li
          a(href="https://github.com/spf13/cobra") https://github.com/spf13/cobra
        li
          a(href="https://github.com/spf13/viper") https://github.com/spf13/viper

      p.
        Hugo is ideal for blogs, corporate websites, creative portfolios,
        online magazines, single page applications or even a website
        with thousands of pages.
      p.
        Hugo is for people who want to hand code their own website without
        worrying about setting up complicated runtimes, dependencies and
        databases.
      p.
        Websites built with Hugo are extremely fast, secure and can be
        deployed anywhere including, AWS, GitHub Pages, Heroku, Netlify
        and any other hosting provider.
      p.
        Learn more and contribute on
        a(href="https://github.com/gohugoio") GitHub
        .

  footer.w-full.text-center.p-4.text-xs.text-gray-400
    p
      | Built with
      |
      a.underline.hover:text-blue-800.dark:hover:text-blue-300(
        href="https://gohugo.io"
        target="_blank"
        rel="noopener noreferrer") Hugo
      |
      | and
      |
      a.underline.hover:text-blue-800.dark:hover:text-blue-300(
        href="https://github.com/apvarun/showcase-hugo-theme"
        target="_blank"
        rel="noopener noreferrer") Showfolio
</template>

