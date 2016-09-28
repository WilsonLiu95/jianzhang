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
  set: function (val) {
    _set("note_book", val);
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
function reCheckDate(note_book_key, dateIdx){
  var nb = noteBook.get(note_book_key)
  var all_record = record.get()

  var bill = nb.bill_array[dateIdx]
  bill.payout = 0
  bill.income = 0
  var bill_arr = bill.record_arr_idx
  bill_arr.forEach(function(val, idx){
    var _record = all_record[val - 1]
    debugger
    if(_record.record_type == "支出"){
      bill.payout += _record.money
    } else {
      bill.income += _record.money
    }
  })
  nb.bill_array[dateIdx] = bill
  noteBook.set(note_book_key, nb)
}
window.user = user
window.record = record
window.noteBook = noteBook
window.sync = sync
window.reCheckDate = reCheckDate
export {user, record, noteBook, sync}
