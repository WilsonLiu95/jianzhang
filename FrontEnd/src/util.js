function getSearch (){
  var head_idx = location.hash.indexOf("?")
  var search = location.hash.slice(head_idx + 1)
  var search_arr = search.split("&")
  var result = {};
  search_arr.forEach(function(val,idx){
    var key = val.split('=')[0]
    var value = val.split('=')[1]
    result[key] = value
  })
  return result
}

window.getSearch = getSearch
