var Sequelize = require("sequelize");
var config = require('../bin/config/config');
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql',
  pool: {
    max: 100,
    maxConnections: 100,
    min: 0,
    minConnections: 0,
    idle: 120000,
    maxIdleTime: 120000
  }
});

module.exports = sequelize;
