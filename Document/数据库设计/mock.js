// ===========================基本数据单元=================================
// 本地的单条record数据

/* state应该有几种情况,
1. 创建但并未上传
2. 创建后并未上传就被删除 (直接当没有创建过)
3. 创建后并未上传就被修改 (同状态1)
4. 已上传
5. 上传后本地再次修改且并未与线上同步 (同步后，则回归状态4)
6. 上传后删除并未与线上同步 (同步后，则回归状态4)
7. 已删除
*/

var record_example = {
    note_book_id: 1, // 不可修改字段
    user_seq_num: 10, // 用户创建的第几条数据，不可修改字段
    record_seq_num: 3, // 该账本的第几条数据，不可修改字段
    create_time: "2016-09-13 00:00:00",
    update_time: "2016-09-14 00:00:00",
    date: "2016-09-01", // 日期
    day_of_week: 1, // 周几
    state:1,  
    account_type: "现金",
    record_type: "支出",
    custom_type: "早餐",
    comment: "今天早餐吃的有点多",
    money: 20,
}


// 单个账本的数据
/* state应该有几种情况,因为账本不直接与线上数据同步，而是修改一些账本属性字段就同步。如果没网络则存储在sync_noteBook中。
账本只存在2种状态，
1. 使用中
2. 已删除
*/
var note_book_1 = {
    note_book_id: 1, // 不可修改字段
    note_book_name: "201509开学季",
    create_time:2015,
    update_time:2016,
    state:0,
    budget: "900", // 预算 
    custom_conf: null,
    bill_array:[{
        date: 1,
        payout: "30.20", // 开销
        income: "5200.00", // 收入，发工资了
        record_arr_idx:[1,4,6,8,10], // 存储 note_book_1.record_array 的索引
    },{
        date: 2,
        payout: "100.30", // 开销
        income: "0.00", // 收入，发工资了
        record_arr_idx:[1,4,6,8,10], // 存储 note_book_1.record_array 的索引
    }], // 1号-31号的账单数组
    record_array: [record_1,record_2, record_3],
}
//  用户数据   包含user于config两个表的数据
var user = {
    name:"wilson",
    account:"wilsonliuxyz@gmail.com",
    uid: "7123818af58c015a34b78652f5fb90d7e304a2d825656542733725147fcfc735",
    bkg_img:"http://wilsonliu.cn/cdn/bkg_img.png", // 预留字段
    custom_type_conf:[{
        custom_type: "用餐", // 自定义类型
        record_type: "支出", // 记录类型
    },{
        custom_type: "工资", // 自定义类型
        record_type: "收入", // 记录类型
    },{
        custom_type: "零食", // 自定义类型
        record_type: "支出", // 记录类型
    },{
        custom_type: "交通", // 自定义类型
        record_type: "支出", // 记录类型
    },{
        custom_type: "娱乐", // 自定义类型
        record_type: "支出", // 记录类型
    },{
        custom_type: "社交", // 自定义类型
        record_type: "支出", // 记录类型
    },{
        custom_type: "购物", // 自定义类型
        record_type: "支出", // 记录类型
    }],
    head_url: "http://wilsonliu.cn/cdn/wilsonliuhead.png", // 预留字段
    age: 20, // 预留字段
    jobs: "学生", // 预留字段
    address: "湖北武汉" // 预留字段
}


// ===========================本地存储的数据=================================
// 缓存待同步的数据
var sync = {
    record: [record_3,record_4,record_5], // 待同步的数组，存储索引
    noteBook: [option1,option2], // 将POST的ajax的option缓存，一旦有网后就进行同步
    config: user // 将当前更改过的数据POST到后端
}

// 本地使用中的数据
var user = {}
var all_record = [record_1,record_2,record_3,record_4,record_5], // 存储用户所有的数据,每生成一条就push一条进来
// note_book数组存储所有账本 
var note_book = [note_book_1, note_book_2, note_book_3]

/*
优化思考:
1. 这里将所有record存储在本地all_record，其他里面都只是存储all_record的索引。这里需要封装一个接口来统一调取all_record中的记录，
以方便当all_record过大时造成问题，以后可以分组存储但是对外提供统一接口。
2. 原先准备将数据库中的note_book通过record进行同步，现在改为直接与本地进行同步。否则每次录入多条record都会造成频繁操作note_book。
所以将这个计算的工作放在终端去执行。(如何同步note_book，第一是用户对基本属性的更改，第二是对bill_array与record_array进行更改，
都会触发同步操作)
3. 索引优化

*/

