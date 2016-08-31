var express = require('express');
var config = require('../bin/config/config');

// init db connection
var pool = require(config.root + 'db/pool');
var usersAttr = require(config.root + 'db/usersattr');
// 加密
var crypto = require('crypto');

// init db
var users = pool.define('users', usersAttr, {
  timestamps: false
});

// init util
var Util = require(config.root + 'helper/util');

module.exports = {
  getLogin: function (req, res) {
    // 登录
    var vm = {
      view: 'user/login',
      title: '登录'
    };
    Util.viewModel(req, res, vm);
  },
  getRegister: function (req, res) {
    // 注册
    var vm = {
      view: 'user/register',
      title: '注册'
    };
    Util.viewModel(req, res, vm);
  },
  // 登出
  getLogout: function (req, res) {
    // 消除session
    req.session.destroy(function(err) {
      console.log(arguments);
    });
    res.redirect('/uploader');
  },
  postLogin: function (req, res) {
    var formData = req.body;
    var _out;
    var _where = {
      where: {
        "userAccount": formData.userAccount
      }
    };
    users.findOne(_where).then(function (data) {

      if (!data) {
        // 用户不存在
        _out = {
          retCode: -1,
          msg: "用户不存在"
        };
      } else {
        var userInfo = data.dataValues;
        // 用户存在，比对密码
        // 对用户输入的密码进行加盐hash，并比较其余数据库中的密码是否一致
        var hmac = crypto.createHmac('sha256', userInfo.salt);
        formData.userPassword = hmac.update(formData.userPassword).digest('hex');
        if (userInfo.userPassword === formData.userPassword) {
          var sess = req.session;
          res.cookie('uid', userInfo.uid, { maxAge: 3600000, path: "/uploader" });
          // 在session中显示用户名
          sess.userName = userInfo.userName;
          sess.uid = userInfo.uid;
          _out = {
            retCode: 0,
            msg: "重定向",
            url: "/uploader/"
          };

        } else {
          // 密码输入错误
          _out = {
            retCode: -2,
            msg: "密码错误，请重新输出"
          };
        }
      }
      res.send(JSON.stringify(_out));
    });
  },
  postRegister: function (req, res) {
    var formData = req.body;
    var _time = Util.getDateInfo();
    var _out;
    // 制造唯一的用户ID
    var _uin = new Date().getTime().toString() + formData.userName;
    var _salt = new Date().getTime().toString() + formData.userAccount;
    // userId
    formData.uid = crypto.createHash('sha256').update(_uin).digest('hex');
    // 密码加盐处理
    formData.salt = crypto.createHash('sha256').update(_salt).digest('hex');
    // 加盐存储密码
    var hmac = crypto.createHmac('sha256', formData.salt);
    formData.userPassword = hmac.update(formData.userPassword).digest('hex');

    // 时间
    formData.time = parseInt(new Date().getTime() / 1000, 10);
    formData.dateFullYear = _time.year;
    formData.dateMonth = _time.month;
    formData.dateDate = _time.day;
    formData.dateHours = _time.hours;
    formData.dateMinutes = _time.minutes;
    formData.dateSeconds = _time.seconds;

    users.create(formData).then(function (data) {
      var userInfo = data.dataValues;
      if (userInfo) {
        var sess = req.session;
        res.cookie('uid', userInfo.uid, { maxAge: 3600000, path: "/uploader" });
        // 在session中显示用户名
        sess.userName = userInfo.userName;
        sess.uid = userInfo.uid;
        _out = {
          retCode: 0,
          msg: "重定向",
          url: "/uploader/"
        };
        res.send(JSON.stringify(_out));
      }
    });
  }
};
