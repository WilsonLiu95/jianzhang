export default function (router) {
  router.redirect({
    '/': '/index'
  })
  router.map({
    '/index': {
      component: function (resolve) {
        // somehow retrieve your component definition from server...
        require(['_views/index.vue'], resolve)
      }
    },
    '/config': {
      component: function (resolve) {
        // somehow retrieve your component definition from server...
        require(['_views/config.vue'], resolve)
      }
    },
    '404': {
      component: require('_views/not-found.vue')
    }

  })
  // If no route is matched redirect home
  router.redirect({
    '*': '404'
  })
}
