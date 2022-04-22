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
import Xfigure from '~/app/components/xfigure.vue'


export default {
  ...DefaultTheme,
  Layout: CustomLayout,

  //call at createApp
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
    app.component('Xfigure', Xfigure)

    //==================================
    // app = Vue createApp
    // router = vitepress router
    // siteData = vitepress data
    //console.log('Data', siteData)
    //console.log('Router', router)
    // router = route, go()
    //   route = reactive(getDefaultRoute)
    //   go() =

    //console.log('Router', router)
    //console.log('Data', siteData)


  },
}

/*
//vuepress (vuerouter only)
    router.beforeEach((to) => {
      console.log('before navigation')
    })

    router.afterEach((to) => {
      console.log('after navigation')
    })




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
