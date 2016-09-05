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
var record_1 = {
    note_book_id: 1, // 不可修改字段
    user_seq_num: 10, // 用户创建的第几条数据，不可修改字段
    record_seq_num: 3, // 该账本的第几条数据，不可修改字段
    create_time: 2015,
    update_time:2016,
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
        custom_type: "早餐", // 自定义类型
        record_type: "支出", // 记录类型
    }],
    head_url: "http://wilsonliu.cn/cdn/wilsonliuhead.png", // 预留字段
    age: 20, // 预留字段
    jobs: "学生", // 预留字段
    address: "湖北武汉" // 预留字段
}


// ===========================本地存储的数据=================================
// 缓存待同步的数据
var sync_record = [record_3,record_4,record_5], // 待同步的数组，直接存储数据本身，而非索引
var sync_noteBook = [option1,option2], // 将POST的ajax的option缓存，一旦有网后就进行同步
var sync_config = user, // 将当前更改过的数据POST到后端


// 本地使用中的数据
var user = {}
var all_record = [record_1,record_2,record_3,record_4,record_5], // 存储用户所有的数据,每生成一条就push一条进来
// 每个note_book存储一条 
var note_book_1 = {},
var note_book_2 = {},
var note_book_3 = {},


/*
优化思考:
1. all_record的数据冗余
这里其实存储在all_record里的数组会存在冗余，因为all_record存储的数据必定在note_book的record_array中存在，
所以数据量会double了一次。

这里其实也可以通过遍历各个账本的record_array来重新构建all_record,所以理论上也可以去掉all_record。然后需要的时候再对账本进行遍历
以获取所有记录。

但是这里会增加代码执行过程中的计算量，所以是以空间换时间的一个问题。这里目前来看本地存储应该可以满足双份数据保存的需要，所以先以方便，
快捷优先。

*/

