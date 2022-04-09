import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
//import './styles/tailwind.postcss'

//import { pinia } from '../../source/vue/stores'

import CustomLayout from './components/CustomLayout.vue'
//import NewLayout from './components/NewLayout.vue'
//import Archives from './components/Archives.vue'
//import Tags from './components/Tags.vue'
//import Page from './components/Page.vue'
//import Comment from './components/Comment.vue'
//import Player from '@/vue/components/player.vue'


export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData}) {

    //==================================
    // register vue plugins
    //app.use(pinia)

    //==================================
    // register global compoment
    //app.component('Tags', Tags)
    //app.component('Archives', Archives)
    //app.component('Page', Page)
    //app.component('Comment', Comment)
    //app.component('Player', Player)
  },
}
