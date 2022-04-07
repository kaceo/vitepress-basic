import DefaultTheme from 'vitepress/theme'
//import './tailwind.postcss'
//import Player from '../../components/player.vue'

//import { pinia } from '../../source/stores'
import './local.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData}) {
    //app.component('Player', Player)
    //app.use(pinia)
  },
}
