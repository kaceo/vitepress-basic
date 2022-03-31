import DefaultTheme from 'vitepress/theme'
//import './tailwind.postcss'
//import Player from '../../components/player.vue'
import './local.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData}) {
    //app.component('Player', Player)
  },
}
