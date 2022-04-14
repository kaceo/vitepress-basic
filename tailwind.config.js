const daisyui = require("daisyui")
const typography = require("@tailwindcss/typography")

module.exports = {
  content: [
    './source/**/*.{js,vue}',
    './.vitepress/**/*.{js,vue}'
  ],
  plugins: [
    typography,
    daisyui,
  ],
  theme: {
    extend: {},
  },
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

}
