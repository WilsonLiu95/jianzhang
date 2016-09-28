function makenote({ dispatch, state }, newRecord) {
  this.$store.dispatch("MODIFYSELECTDATE", { select: new Date(newRecord.date).getDate() })
  this.$store.dispatch("ADDRECORD", { record: newRecord })
}
function modifynote({ dispatch, state }, newRecord, index) {
  var rd = this.$store.state.record[index]
  if (newRecord.date === rd.date) {
    // 日期没有改变
    
  } else {
    // 日期改变

  }
}
export default {
  makenote: makenote
}
