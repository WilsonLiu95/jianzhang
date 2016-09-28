import types from "./types"

export const state = {
  user: JSON.parse(window.localStorage.getItem(types.USER) || '{}'),
  record: JSON.parse(window.localStorage.getItem(types.RECORD) || '[]'),
  notebook: JSON.parse(window.localStorage.getItem(types.NOTEBOOK) || '[]'),
  sync: JSON.parse(window.localStorage.getItem(types.SYNC) || '{}'),
  current_notebook: JSON.parse(window.localStorage.getItem(types.CURRENTNOTEBOOK) || '0'),
  select_date: JSON.parse(window.localStorage.getItem(types.SELECTDATE) || '3'),
}

export const mutations = {
  // all_record
  ADDRECORD(state, option) {

    // 直接压入
    state.record.push(option.record)

    // 将对应的Notebook中更新
    var nb = state.notebook[state.current_notebook]
    nb.record_num++
    nb.bill_array[state.select_date - 1].record_arr_idx.push(option.record.user_seq_num)

    if (option.record.record_type === "支出") {
      nb.bill_array[state.select_date - 1].payout += option.record.money // 修改当天总支出
      nb.payout += option.record.money
    } else {
      nb.bill_array[state.select_date - 1].income += option.record.money
      nb.income += option.record.money
    }
  },
  MODIFYRECORD(state, option) {
    // 直接覆盖对应的record
    state.record[option.index] = option.record

  },
  REMOVERECORD(state, option) {
    var rd = state.record[option.index]
    var nb = state.notebook[state.current_notebook]
    rd.state = 0
    if (rd.record_type === "支出") {
      nb.bill_array[state.select_date - 1].payout -= rd.money
      nb.payout -= rd.money
    } else {
      nb.bill_array[state.select_date - 1].income -= rd.money
      nb.income -= rd.money
    }
  },
  // notebook
  ADDNOTEBOOK(state, option) {
    state.notebook.push(option.notebook)
  },
  MODIFYNOTEBOOK(state, option) {
    state.notebook[option.index] = option.notebook
  },
  RECHECKNOTEBOOK(state, option) {
    // 重新校验收支
    var nb = state.notebook[state.current_notebook]
    var bill_array = nb.bill_array
    var len = bill_array.length
    // 清零
    nb.income = 0
    nb.payout = 0

    for (var i = 0; i < len; i++) {
      // 对账本的日期进行遍历
      var current_bill = bill_array[i]
      // 清零
      current_bill.income = 0
      current_bill.payout = 0

      var arr = current_bill.record_arr_idx

      arr.forEach(function (val, idx) {
        // 对当天的所有记录进行遍历累加
        var rd = state.record[val]
        if (!rd.state) return
        if (rd.record_type === "支出") {
          current_bill.payout += rd.money
          nb.payout += rd.money
        } else {
          current_bill.income += rd.money
          nb.income += rd.money
        }
      })
    }
  },
  // USER
  USER(state, option) {
    state.user = option.user
  },
  // SYNC 待定
  ADDSYNC(state, option) {

  },
  MODIFYSYNC(state, option) {

  },
  MODIFYCURRENTNOTEBOOK(state, option) {
    state.current_notebook = option.select
  },
  MODIFYSELECTDATE(state, option) {
    state.select_date = option.select
  }


}
