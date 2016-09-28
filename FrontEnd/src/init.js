import types from "_vuex/types"
var d=new Date()
var all_record = [];

var monthDays = getDate(d).monthDays

var note_book_example = {
  note_book_id: 0, // 不可修改字段
  note_book_name: formatDate(d,"%Y%M",true),
  create_time: d,
  update_time: "",
  state: 1,
  budget: 0.00, // 预算
  payout: 0.00,
  income: 0.00,
  custom_conf: null,
  record_num: 0,
  bill_array:[]
}
for (var i=0;i<monthDays;i++){
 note_book_example.bill_array.push({
   date: i+1,
   record_arr_idx:[],
   payout: 0.00,
   income: 0.00
 })
}

var note_book = []
note_book.push(note_book_example)

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
    }],
  head_url: "http://wilsonliu.cn/cdn/wilsonliuhead.png", // 预留字段
  age: 20, // 预留字段
  jobs: "学生", // 预留字段
  address: "湖北武汉" // 预留字段
}
export default {user, all_record, note_book}

