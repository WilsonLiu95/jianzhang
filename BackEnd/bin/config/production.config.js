"use strict";
var path = require('path');
module.exports = function (ROOT_PATH) {
  var config = {
    server: {
      port: process.env.PORT || 3000,
      hostname: process.env.HOSTNAME || 'wilsonliu.cn'
    },
    baseURL: process.env.BASE_URL || '//wilsonliu.cn/uploader/',
    baseTitle: '图片上传系统',
    root: ROOT_PATH,
    staticRoot: path.normalize(__dirname + '/../../public') + '/',
    upload: {
      uploadUrlRoot: '/uploaded/',
      uploadUrl: '/uploader/uploaded/files/'
    },
    minifyConf: {
      'name': 'wilson',
      'dir': ROOT_PATH + 'public/resources/minify/',
      'path': '/data/resources/img/',
      'href': '//wilsonliu.cn/cdn/img/'
    },
    db: {
      host: '127.0.0.1',
      username: 'root',
      password: 'root',
      database: 'uploader',
      port: 3306
    },
    sess: {
      host: '127.0.0.1',// Host name for database connection.
      port: 3306,// Port number for database connection.
      user: 'root',// Database user.
      password: 'root',// Password for the above database user.
      database: 'uploader',// Database name.
      checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds.
      expiration: 86400000,// The maximum age of a valid session; milliseconds.
      createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist.
      schema: {
        tableName: 'sessions',
        columnNames: {
          session_id: 'session_id',
          expires: 'expires',
          data: 'data'
        }
      }
    }
  };
  return config;
};
