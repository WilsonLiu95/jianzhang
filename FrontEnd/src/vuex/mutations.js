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
  ADDRECORD (state, option){
    // 直接压入
    state.record.push(option.record)
  },
  MODIFYRECORD (state, option){
    // 直接覆盖对应的record
    state.record[option.idx] = option.record
  },
  // notebook
  ADDNOTEBOOK (state, option){
    state.notebook.push(option.notebook)
  },
  MODIFYNOTEBOOK (state, option){
    state.notebook[option.index] = option.notebook
  },
  // USER
  USER (state, option){
    state.user = option.user
  },
  // SYNC 待定
  ADDSYNC (state, option){

  },
  MODIFYSYNC (state, option){

  },
  MODIFYCURRENTNOTEBOOK (state, option){
    state.current_notebook = option.select
  },
  MODIFYSELECTDATE (state, option){
    state.select_date = option.select
  }


}
