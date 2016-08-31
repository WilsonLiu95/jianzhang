var config = require('./config');
module.exports = function (swig) {
  swig.setDefaults({
    varControls: [
      '{?',
      '?}'
    ],
    cache: false,
    locals: {
      now: function () {
        return new Date().getTime();
      }
    }
  });
};
