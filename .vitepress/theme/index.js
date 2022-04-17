import DefaultTheme from 'vitepress/theme'
import './styles/tailwind.postcss'
import './styles/custom.css'


import CustomLayout from './components/CustomLayout.vue'
//import NewLayout from './components/NewLayout.vue'
//import Archives from './components/Archives.vue'
//import Tags from './components/Tags.vue'
//import Page from './components/Page.vue'
//import Comment from './components/Comment.vue'
//import Player from '@/vue/components/player.vue'

import { stores } from '~/app/stores'
import Xcard from '~/app/components/xcard.vue'

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData}) {

    //==================================
    // register vue plugins
    app.use(stores) //init stores based on pinia

    //==================================
    // register global compoment
    //app.component('Tags', Tags)
    //app.component('Archives', Archives)
    //app.component('Page', Page)
    //app.component('Comment', Comment)
    //app.component('Player', Player)
    app.component('Xcard', Xcard)
  },
}

/*
// DefaultTheme (vitepress/theme)
  { Layout, NotFound }

// Auto Glob Install Components
const modules = import.meta.globEager('../components/ ** / *.vue')
const components = []

for (const path in modules) {
  components.push(modules[path].default)
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}

*/
