export default {
  notelist: function (state){
      var current_notebook = state.current_notebook
      // 选择当前账本 当前选择日期的记录数组

      var arrIdx = state.notebook[current_notebook].bill_array[state.select_date - 1].record_arr_idx
      var arr = []
      arrIdx.forEach(function(val){
        arr.push(state.record[val]);
      })
      return arr
  },
  bill_array: function (state){
      var current_notebook = state.current_notebook
      return state.notebook[current_notebook].bill_array
  },
  current_notebook: function(state){
    return state.current_notebook
  },
  select_date: function(state){
    return state.select_date
  },
  user: function(state){
    return state.user
  },
  is_start_record: function(state){
    return state.user.is_start_record
  }
}
