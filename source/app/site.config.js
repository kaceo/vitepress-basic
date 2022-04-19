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
    "text": "Misc",
    "items": [
      { "text": "🔖 Tags", "link": "/tags" },
      { "text": "📃 Archives", "link": "/archives" },
    ]
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
        "link": "/pages/start"
      },
      {
        "text": "First Post",
        "link": "/posts/first-post"
      }
    ]
  },
  {
    "text": "Alice",
    "children": [
      {
        "text": "Title Page",
        "link": "/book/alice-00"
      },
      {
        "text": "I. Down the Rabbit-Hole",
        "link": "/book/alice-01"
      },
      {
        "text": "II. The Pool of Tears",
        "link": "/book/alice-02"
      },
      {
        "text": "III. A Caucus-Race and a Long Tale",
        "link": "/book/alice-03"
      },
      {
        "text": "IV. The Rabbit Sends in a Little Bill",
        "link": "/book/alice-04"
      },
      {
        "text": "V. Advice from a Caterpillar",
        "link": "/book/alice-05"
      },
      {
        "text": "VI. Pig and Pepper",
        "link": "/book/alice-06"
      },
      {
        "text": "VII. A Mad Tea-Party",
        "link": "/book/alice-07"
      },
      {
        "text": "VIII. The Queen's Croquet-Ground",
        "link": "/book/alice-08"
      },
      {
        "text": "IX. The Mock Turtle's Story",
        "link": "/book/alice-09"
      },
      {
        "text": "X. The Lobster Quadrille",
        "link": "/book/alice-10"
      },
      {
        "text": "XI. Who Stole the Tarts?",
        "link": "/book/alice-11"
      },
      {
        "text": "XII. Alice's Evidence",
        "link": "/book/alice-12"
      },
      {
        "text": "Frontispiece Epigraph",
        "link": "/book/alice-99"
      },
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
