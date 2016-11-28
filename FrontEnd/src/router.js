export default function (router) {
  // router.redirect({
  //   '/': '/index'
  // })
  router.map({
    '/': {
      component: require('_views/index.vue')
    },
    '/index': {
      component: require('_views/index.vue')
    },
    '/config': {
      // component: function (resolve) {
      //   // somehow retrieve your component definition from server...
      //   require(['_views/config.vue'], resolve)
      // }
      component: require('_views/config.vue')
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
