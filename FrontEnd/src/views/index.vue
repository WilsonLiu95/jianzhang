<template>
	<div>
		<x-header id="_header" :left-options="{showBack: false}" style="padding-top: 0" >
			<a slot="left" v-link="'/config'" class="header-left"></a>
			<a slot @click="showActionsheet" style="font-size:21px; font-weight:200; ">
        当前账本: {{currentbook}}
      </a>
		</x-header>
    <div class="input-output">
            收入:{{notebook.income.toFixed(2)}} 支出:{{notebook.payout.toFixed(2)}}
    </div>
		<div class="main-body">
			<date-note class="date-note" :bill_array="bill_array" :select="select_date">
			</date-note>


        <scroller :pulldown-config="{content:'下拉记账',downContent:'下拉前往记账',upContent:'释放跳转记账',scrollbarY:'true'}"
          @pulldown:loading="loadTop"  height="520px"  lock-x  use-pulldown bounce 	 >
        <swipe-item  class="note-card" :list="notelist" :tap="modifyNote" :remove="removeRecord">
        </swipe-item>
        </scroller>

		</div>
   <toast :show="changeNB" type="text">新的一月到来咯</toast>
	</div>

	<actionsheet :show.sync="sheetVisible" :menus="notebookarr" @on-click-menu="selectNotebook">

	</actionsheet>

</template>
<script>
import { Group, Selector, XHeader, Actionsheet,Scroller, Toast} from 'vux/src/components'
import dateNote from '_comp/date-note'
import getters from '_vuex/getters'
import actions from '_vuex/actions'
import swipeItem from '_comp/swipe-item'

var touchparam = {

}
export default {
  data: function () {
    return {
      sheetVisible: false,
      changeNB: false,
    }
  },
  components: {
    dateNote,
    Group,
    Selector,
    swipeItem,
    XHeader,
    Scroller,
    Actionsheet,
    Toast
  },
  vuex: {
    getters,actions
  },
  computed: {
    currentbook: function(){
      var state = this.$store.state
      return state.notebook[state.current_notebook].note_book_name
    },
    notebookarr: function(){
      var state = this.$store.state
      var that = this
      var arr = {}
      state.notebook.forEach(function(val,index){
        // 如果是删除则不返回
        if(!val.state) return
        arr[index] = val.note_book_name
      })
      return arr
    },
    notebook: function(){
      var state = this.$store.state
      return state.notebook[state.current_notebook]
    }
  },
  ready(){
    var isAddNB = true
    var nb = this.$store.state.notebook
    var current_month = util.formatDate(new Date(), "%Y%M", true)
    nb.forEach(function(val, index){
      if (val.note_book_name == current_month){
        isAddNB = false
      }
    })
    if (isAddNB){
      addNB(this)
      this.$store.state.current_notebook = nb.length - 1;
      this.changeNB = true
    }
    // debugger
    if(!util.getSearch().hasJumpRecord && this.$store.state.user.is_start_record){
      location.href = "./#!/record?hasJumpRecord=true"
    }
  },

  methods: {
    showActionsheet: function(e){
        this.sheetVisible = true
    },
    selectNotebook(key, value) {
      this.$store.dispatch("MODIFYCURRENTNOTEBOOK", {select:key})
    },
    loadTop() {
      location.href = "./#!/record"
    },
    removeRecord: function(index){
      var option = {}
      var idx = this.bill_array[this.select_date - 1].record_arr_idx[index]
      option.index = idx
      this.removenote(option)
     },
     modifyNote: function(index){
       var idx = this.bill_array[this.select_date - 1].record_arr_idx[index]
       location.href = "./#!/record?index=" + idx
     }
  }
}

function addNB(vue) {
  var d = new Date()
  var that = vue
  var ymd = util.formatDate(d, "%Y-%M-%D", true)
  var datearr = ymd.split("-")
  var nb = that.$store.state.notebook
  d.setFullYear(datearr[0], datearr[1]  - 1, datearr[2])
  var monthDays = util.getMonthDays(d).monthDays
  var note_book_example = {
    note_book_id: nb.length, // 不可修改字段
    note_book_name: util.formatDate(new Date(), "%Y%M", true),
    create_time: d,
    update_time: "",
    state: 1,
    budget: 0.00, // 预算
    payout: 0.00,
    income: 0.00,
    custom_conf: null,
    record_num: 0,
    bill_array: []
  }
  for (var i = 0; i < monthDays; i++) {
    note_book_example.bill_array.push({
      date: i + 1,
      record_arr_idx: [],
      payout: 0.00,
      income: 0.00
    })
  }
 that.$store.dispatch("ADDNOTEBOOK",{notebook:note_book_example})
}
</script>
<style>
	.header-left:before {
		content: "\2022\0020\2022\0020\2022\0020";
		font-size: 16px;
    color:#F4F6F1
	}
   .trans {
    transition:  0.1s ease;
  }
  .input-output {
    position: fixed;
    z-index: 10;
    top:33px;
    width: 100%;
    height: 10px;
    text-align: center;
    color: #FFF;
    font-size: 10px;
    font-weight:100;
  }
  .date-note {
    margin: 18px 0 18px 0;
  }
</style>

