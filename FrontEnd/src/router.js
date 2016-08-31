export default function (router) {
  router.redirect({
    '/': '/index'
  })
  router.map({
    '/index': {
      component: function (resolve) {
        // somehow retrieve your component definition from server...
        require(['_comp/Hello.vue'], resolve)
      }
    }
  })
}
