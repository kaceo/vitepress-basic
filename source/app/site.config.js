// This file contains the main site configuration
//=================================================

const identity = {
  "git": {
    "owner": 'kaceo',
    "repo": "vitepress-basic",
  },
  //----------------------------
  "title": 'Demo Vitepress',
  "description": 'Simple Vite ssg',
  //----------------------------
  "svglogo": "/logo.svg",
  "favicon": '/favicon.ico', //"favicon-32x32.png",
  //----------------------------
  "footer": "Ⓒ Acme",
}

//=================================================
//Navigation (top menus)
//"text":
//"link":
//"position": "left",
//"external": false
// items: []
function navigation() {return [
  {
    "text": "🏡 Home", "link": "/"
  },
  {
    "text": "🔖 Tags", "link": "/tags"
  },
  {
    "text": "📃 Archives", "link": "/archives"
  },
  {
    "text": "About",
    "items": [
      {
        "text": "About", "link": "/about"
      },
      {
        "text": "Demo", "link": "/pages/demo"
      },
      {
        "text": "Github", "link": "https://github.com/"
      }
    ]
  },
]}

//=================================================
function sidebar() {return [
  {
    "text": "Test",
    "children": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "About",
        "link": "/about"
      },
      {
        "text": "Music",
        "link": "/pages/music"
      },
      {
        "text": "Data",
        "link": "/pages/data"
      },
      {
        "text": "Getting Started",
        "link": "/book/start"
      },
      {
        "text": "First Post",
        "link": "/posts/first-post"
      }
    ]
  },
  {
    "text": "Advanced",
    "children": [
      {
        "text": "Frontmatter",
        "link": "/guide/frontmatter"
      },
      {
        "text": "Theming",
        "link": "/guide/theming"
      },
      {
        "text": "API Reference",
        "link": "/guide/api"
      },
      {
        "text": "Differences from Vuepress",
        "link": "/guide/differences-from-vuepress"
      }
    ]
  },
]}

//=================================================
function socials() { return[
  {
    "icon": "languages",
    "link": "/translations/"
  },
  {
    "icon": "github",
    "link": "https://github.com/vuejs/"
  },
  {
    "icon": "twitter",
    "link": "https://twitter.com/vuejs"
  },
  {
    "icon": "discord",
    "link": "https://discord.com/invite/HBherRA"
  }
]}

//=================================================
function analytics() { return[
  {
  "id": "G-xxxxx",
  "disable": "true"
  }
]}

//=================================================
function head() { return[
  /*
  ["link",
    { "rel": "icon",
      "type": "image/svg+xml",
      "href": identity.svglogo
      //"/logo.svg"
    }
  ], */
  ["link", { "rel": "icon", "type": "image/x-icon",
   "href": identity.favicon
      //"/favicon.ico"
    }
  ],
  [ "link", { "rel": "stylesheet", "type": "text/css",
    "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" }
  ],

  //------------------------------------
  [ "meta", { "name": "generator",
    "content": "vitepress"  }
  ],
  [ "meta", { "name": "keywords",
    "content": ""  }
  ],
  [ "meta", { "name": "copyright",
    "content": "" }
  ],
  [ "meta", { "name": "author",
    "content": "author" }
  ],
  [ "meta", { "name": "og.title",
    "content": "A Play" }
  ],
  [ "meta", { "name": "og.description",
    "content": "Home of the Player" }
  ],
  [ "meta", { "name": "twitter:creator",
    "content": "@"  }
  ],
  [ "meta", { "name": "twitter:card",
    "content": "summary_large_image"  }
  ],

  //------------------------------------
  /*
  [ "script",
    { "src": "https://plausible.io/js/plausible.js",
      "async": "true", "defer": "true" }
  ],
  [ "link", { "rel": "stylesheet",
    "href": "https://unpkg.com/gitalk/dist/gitalk.css" }
  ],
  [ "script", {
    "src": "https://unpkg.com/gitalk/dist/gitalk.min.js" }
  ]
  */
]}


//=================================================
export default {
  ...identity,
  //----------------------------
  "navigation": navigation(),
  "sidebar": sidebar(),
  "social": socials(),
  "analytics": analytics(),
  "head": head(),
}
