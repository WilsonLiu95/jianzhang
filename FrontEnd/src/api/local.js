// 封装2个内部基本函数
function _get(key) {
  var valueStr = localStorage.getItem(key);
  return JSON.parse(valueStr);
}
function _set(key, value) {
  var valueStr = JSON.stringify(value);
  localStorage.setItem(key, valueStr);
}

// user 暴露出两个接口
var user = {
  get: function(){
    return _get('user');
  },
  set: function (val) {
    _set("user", val);
  }
}
// all_record暴露接口
var record = {
  get: function(){
    return _get('all_record')
  },
  set: function (val) {
    _set("all_record", val);
  }
}
// 记账本的接口
var noteBook = {
  get: function (key) {
    return _get('note_book_' + key);
  },
  set: function (key, val) {
    _set("note_book_" + key, val);
  }
}

// 待同步的用户数据
var sync = {
  get: function (key) {
    var sync =  _get("sync");
    return sync[key];
  },
  set: function (key, val) {
    _set(key, val);
  }
}
window.user = user
window.record = record
window.noteBook = noteBook
window.sync = sync
export {user, record, noteBook, sync}
