/**
 * Title:首页;
 * Author:WilsonLiu;
 * Date:15/12/19;
 */
var express = require('express');
var config = require('../bin/config/config');

// init db connection
var pool = require(config.root + 'db/pool');
var docsAttr = require(config.root + 'db/docsattr');

// init db
var docs = pool.define('docs', docsAttr, {
  timestamps: false
});

// init util
var Util = require(config.root + 'helper/util');

module.exports = {
  /**
   * 首页
   * @param req
   * @param res
   */
  index: function (req, res) {
    var _query = req.query,
      _dataInfo = Util.getDateInfo(),
      _user = _query.u || _query.user || req.viewModel.userInfo.userName,

      _year = _query.y || _dataInfo.year,
      _month = _query.m || _dataInfo.month,
      _where = {
        where: {
          author: _user,
          dateFullYear: _year,
          dateMonth: _month
        },
        order: [
          ['id', 'DESC']
        ]
      };

    docs.findAll(_where).then(function (data) {
      var vm = {
        view: 'index',
        data: data,
        title: '首页',
        filter: {
          year: _year,
          month: _month
        }
      };
      Util.viewModel(req, res, vm);
    });
  },

  /**
   * 过滤查询条件
   * @param req
   * @param res
   */
  filter: function (req, res) {
    var _query = req.query,
      _dataInfo = Util.getDateInfo(),
      _user = _query.u || _query.user,
      _year = _query.y || _dataInfo.year,
      _month = _query.m || _dataInfo.month,
      _where = {
        where: {
          dateFullYear: _year,
          dateMonth: _month
        },
        order: [
          ['id', 'DESC']
        ]
      };
    // 如果没有用户,则查找当月全部记录
    if (_user) {
      _where.where.author = _user;
    }
    docs.findAll(_where).then(function (data) {
      data.query = req.query;
      var vm = {
        view: 'index',
        data: data,
        title: '筛选过滤',
        filter: {
          user: _user,
          year: _year,
          month: _month
        }
      };

      Util.viewModel(req, res, vm);
    });
  }
};
