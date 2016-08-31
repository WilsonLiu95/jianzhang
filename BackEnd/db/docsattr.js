var Sequelize = require('sequelize');
module.exports = {
  "id": {
    "type": Sequelize.BIGINT,
    "primaryKey": true,
    "autoIncrement": true
  },
  "name": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dir": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "url": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "thumbnailUrl": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "width": {
    "type": Sequelize.BIGINT,
    "primaryKey": false,
    "autoIncrement": false
  },
  "height": {
    "type": Sequelize.BIGINT,
    "primaryKey": false,
    "autoIncrement": false
  },
  "sourceSize": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "compressSize": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "type": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dateFullYear": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dateMonth": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dateDate": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dateHours": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dateMinutes": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "dateSeconds": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "author": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "authorId": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "time": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  }
};
