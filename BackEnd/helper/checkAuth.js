
module.exports = {
  checkAuth: function (req, res, next) {
    var sess = req.session;
    if (sess && sess.userName) {
      // 登录过
      next();
    } else {
      // 没有登录
      var index = ['/login', '/register'].indexOf(req.url);
      if (index === -1) {
        res.redirect('/uploader/login');
      }
      next();
    }
  }
};
