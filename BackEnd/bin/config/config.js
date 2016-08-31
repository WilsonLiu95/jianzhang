"use strict";

var path = require('path');
var util = require('util');

var rootPath = path.normalize(__dirname + '/../../');
process.env.NODE_ENV = "production";
var env = process.env.NODE_ENV || 'development';

// 根据环境的不同引入不同的config文件
var config = require(__dirname + util.format('/%s.config.js', env))(rootPath);

config.env = env;
config.isDev = (env === 'development');
module.exports = config;
