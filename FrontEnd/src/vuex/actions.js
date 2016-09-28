function makenote({ dispatch, state }, newRecord) {
  this.$store.dispatch("MODIFYSELECTDATE", { select: new Date(newRecord.date).getDate() })
  this.$store.dispatch("ADDRECORD", { record: newRecord })
  this.$store.dispatch("RECHECKNOTEBOOK")
}
function modifynote({ dispatch, state }, newRecord, index) {
  var rd = this.$store.state.record[index]
  if (newRecord.date !== rd.date) {
    // 日期改变
    var newdate = new Date(newRecord.date).getDate()
    var olddate = new Date(rd.date).getDate()
    this.$store.dispatch("MOVERECORD", { newdate, olddate, index })
  }
  this.$store.dispatch("RECHECKNOTEBOOK")
}
export default {
  makenote:makenote,
  modifynote:modifynote
}
