var record_example = {
  note_book_id: 1, // 不可修改字段
  user_seq_num: 10, // 用户创建的第几条数据，不可修改字段
  record_seq_num: 3, // 该账本的第几条数据，不可修改字段
  create_time: "2016-09-13 00:00:00",
  update_time: "2016-09-14 00:00:00",
  date: "2016-09-01", // 日期
  day_of_week: 1, // 周几
  state: 1,
  account_type: "现金",
  record_type: "支出",
  custom_type: "早餐",
  comment: "今天早餐吃的有点多",
  money: 20,
}
var all_record = [];
for (var i = 0; i < 31; i++) {
  all_record[i]= record_example;
}
var note_book_1 = {
  note_book_id: 1, // 不可修改字段
  note_book_name: "201509开学季",
  create_time: 2015,
  update_time: 2016,
  state: 0,
  budget: "900", // 预算
  custom_conf: null,
  bill_array: [
    {
    date: 1,
    payout: "30.20", // 开销
    income: "5200.00", // 收入，发工资了
    record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
  }, {
      date: 2,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 3,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 4,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 5,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 6,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 7,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 8,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 9,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 10,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 11,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 12,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 13,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 14,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 15,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 16,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 17,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 18,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 19,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 20,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 21,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 22,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 23,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 24,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 25,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 26,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 27,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 28,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 29,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 30,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }, {
      date: 31,
      payout: "100.30", // 开销
      income: "0.00", // 收入，发工资了
      record_arr_idx: [1, 4, 6, 8, 10], // 存储 note_book_1.record_array 的索引
    }], // 1号-31号的账单数组

  // record_array: [record_1, record_2, record_3],
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
    }],
  head_url: "http://wilsonliu.cn/cdn/wilsonliuhead.png", // 预留字段
  age: 20, // 预留字段
  jobs: "学生", // 预留字段
  address: "湖北武汉" // 预留字段
}
export default {
  all_record:all_record,
  note_book_1: note_book_1
}
