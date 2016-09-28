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
    debugger
    if (option.record.record_type === "支出") {
      nb.bill_array[state.select_date - 1].payout += option.record.money // 修改当天总支出
      nb.payout += option.record.money
    } else {
      nb.bill_array[state.select_date - 1].income += newRecord.money
      nb.income += option.record.money
    }
  },
  MODIFYRECORD(state, option) {
    // 直接覆盖对应的record
    state.record[option.index] = option.record
  },
  REMOVERECORD(state, option) {
    state.record[option.index].state = 0
  },
  // notebook
  ADDNOTEBOOK(state, option) {
    state.notebook.push(option.notebook)
  },
  MODIFYNOTEBOOK(state, option) {
    state.notebook[option.index] = option.notebook
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
