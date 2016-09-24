export default function (router) {
  router.redirect({
    '/': '/index'
  })
  router.map({
    '/index': {
      component: require('_views/index.vue')
    },
    '/config': {
      component: function (resolve) {
        // somehow retrieve your component definition from server...
        require(['_views/config.vue'], resolve)
      }
    },
    '/makenote': {
      component: require('_views/make-note.vue')
    },
    // '/': {
    //   component: function (resolve) {
    //     // somehow retrieve your component definition from server...
    //     require(['_views/make-note.vue'], resolve)
    //   }
    // },
    '404': {
      component: require('_views/not-found.vue')
    }

  })
  // If no route is matched redirect home
  router.redirect({
    '*': '404'
  })
}
