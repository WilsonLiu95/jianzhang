export default function (router) {
  router.redirect({
    '/': '/record'
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
    '/record': {
      component: require('_views/record.vue')
    },
    '/ctype': {
      component: require('_views/ctype.vue')
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
