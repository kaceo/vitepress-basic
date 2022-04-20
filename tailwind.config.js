const daisyui = require("daisyui")
const typography = require("@tailwindcss/typography")

module.exports = {
  content: [
    './source/**/*.md',
    './source/app/**/*.{js,vue}',
    './.vitepress/**/*.{js,vue}'
  ],
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  separator: '_',  // pug cannot use ":"
  theme: {
    //extend: {},
    //screens: {},
    //colors: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
}
