#!/usr/bin/env node
var debug = require('debug')('app');
var app = require('../app');
app.set('port', app.config.server.port);


var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});


