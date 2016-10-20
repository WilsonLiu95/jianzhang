import types from "_vuex/types"
function getSearch() {
  var head_idx = location.hash.indexOf("?")
  var search = location.hash.slice(head_idx + 1)
  var search_arr = search.split("&")
  var result = {};
  search_arr.forEach(function (val, idx) {
    var key = val.split('=')[0]
    var value = val.split('=')[1]
    result[key] = value
  })
  return result
}
function getMonthDays(indate) {
  var _days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _is = false;
  var _d = 365;

  if ((indate.getFullYear() % 4 === 0 && indate.getFullYear() % 100 !== 0) || indate.getFullYear() % 400 === 0) {
    _days.splice(1, 1, 29);
    _is = true;
    _d = 366;
  } else {
    _days.splice(1, 1, 28);
    _is = false;
    _d = 365;
  }
  return {
    isLeapYear: _is,
    days: _days,
    yearDays: _d,
    monthDays: _days[indate.getMonth()]
  };
}
/**
 * 格式化日期为指定的格式
 *
 * @method date2Str
 * @param {Date} date
 * @param {String} p 输出格式, %Y/%M/%d/%h/%m/%s的组合
 * @param {Boolean} [isFill:false] 不足两位是否补0
 * @return {String}
 */
function formatDate(date, p, isFill) {
  var Y = date.getFullYear(),
    M = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  if (isFill) {
    M = (M < 10) ? ('0' + M) : M;
    d = (d < 10) ? ('0' + d) : d;
    h = (h < 10) ? ('0' + h) : h;
    m = (m < 10) ? ('0' + m) : m;
    s = (s < 10) ? ('0' + s) : s;
  }
  p = p || '%Y-%M-%D %h:%m:%s';
  p = p.replace(/%Y/g, Y).replace(/%M/g, M).replace(/%D/g, d).replace(/%h/g, h).replace(/%m/g, m).replace(/%s/g, s);
  return p;
}


function init(callback) {
  var d = new Date()
  var ymd = formatDate(d, "%Y-%M-%D", true)
  var datearr = ymd.split("-")
  var all_record = [];

  var note_book = []
  for (var j = 2; j >= 1; j--) {
    d.setFullYear(datearr[0], datearr[1] - j - 1, datearr[2])
    var monthDays = getMonthDays(d).monthDays
    var note_book_example = {
      note_book_id: j, // 不可修改字段
      note_book_name: formatDate(new Date(), "%Y%M", true) - j,
      create_time: d,
      update_time: "",
      state: 1,
      budget: 0.00, // 预算
      payout: 0.00,
      income: 0.00,
      custom_conf: null,
      record_num: 0,
      bill_array: []
    }
    for (var i = 0; i < monthDays; i++) {
      note_book_example.bill_array.push({
        date: i + 1,
        record_arr_idx: [],
        payout: 0.00,
        income: 0.00
      })
    }
    note_book.push(note_book_example)
  }


  //  用户数据   包含user于config两个表的数据
  var user = {
    name: "wilson",
    account: "wilsonliuxyz@gmail.com",
    uid: "7123818af58c015a34b78652f5fb90d7e304a2d825656542733725147fcfc735",
    bkg_img: "http://wilsonliu.cn/cdn/bkg_img.png", // 预留字段
    custom_type_conf: [{
      custom_type: "用餐", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "工资", // 自定义类型
      record_type: "收入", // 记录类型
    }, {
      custom_type: "零食", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "交通", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "娱乐", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "社交", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "购物", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "零食3", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "交通2", // 自定义类型
      record_type: "支出", // 记录类型
    }, {
      custom_type: "娱乐2", // 自定义类型
      record_type: "支出", // 记录类型
    }
    ],
    head_url: "http://wilsonliu.cn/cdn/wilsonliuhead.png", // 预留字段
    age: 20, // 预留字段
    jobs: "学生", // 预留字段
    address: "湖北武汉" // 预留字段
  }
  localStorage.all_record ? null : localStorage.setItem(types.RECORD, JSON.stringify(all_record))
  localStorage.user ? null : localStorage.setItem(types.USER, JSON.stringify(user))
  localStorage.note_book ? null : localStorage.setItem(types.NOTEBOOK, JSON.stringify(note_book))
  localStorage.current_notebook ? null : localStorage.setItem(types.CURRENTNOTEBOOK, note_book.length - 1)
  localStorage.select_date ? null : localStorage.setItem(types.SELECTDATE, new Date().getDate())
}
export default { init }

window.util = {
  getSearch, getMonthDays, formatDate
}
