function makenote({ dispatch, state }, newRecord) {

  this.$store.dispatch("MODIFYSELECTDATE", { select: new Date(newRecord.date).getDate() })
  this.$store.dispatch("ADDRECORD", { record: newRecord })
}

export default {
  makenote: makenote
}
