var express = require('express');
var config = require('./bin/config/config');
var router = express.Router();

var indexCtl = require(config.root + 'controllers/index');
var userCtl = require(config.root + 'controllers/user');
/**
 * 首页
 */
router.get('/', indexCtl.index);

/**
 * 查询
 */
router.get('/filter', indexCtl.filter);

/**
 * 用户相关
 */

// 请求登录页面
router.get('/login', userCtl.getLogin);
router.post('/login', userCtl.postLogin);
router.get('/register', userCtl.getRegister);
router.post('/register', userCtl.postRegister);
router.get('/logout', userCtl.getLogout);
module.exports = router;
