// state
const USER = 'user'
const RECORD = 'all_record'
const NOTEBOOK = 'noteBook'
const SYNC = 'sync'


export const state = {
  user: JSON.parse(window.localStorage.getItem(USER) || '{}'),
  record: JSON.parse(window.localStorage.getItem(RECORD) || '[]'),
  notebook: JSON.parse(window.localStorage.getItem(USER) || '[]'),
  sync: JSON.parse(window.localStorage.getItem(SYNC) || '[]'),
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
    state.notebook[option.idx] = option.notebook
  },
  // USER
  USER (state, option){
    state.user = option.user
  },
  // SYNC
  ADDSYNC (state, option){

  },
  MODIFYSYNC (state, option){

  }
}
