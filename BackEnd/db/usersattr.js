var Sequelize = require('sequelize');
module.exports = {
  "id": {
    "type": Sequelize.BIGINT,
    "primaryKey": true,
    "autoIncrement": true
  },
  "uid": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "userAccount": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "salt": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "userPassword": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  },
  "userName": {
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
  "time": {
    "type": Sequelize.STRING,
    "primaryKey": false,
    "autoIncrement": false
  }
};
