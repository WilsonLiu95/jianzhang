<template>
  <div class="animated" transition="slide">
    <x-header :left-options="{showBack: false}" style="linear-gradient(180deg,#303036,#3c3b40)">
      <a slot="left" v-link="'/config'" class="header-left"></a>
      <a slot @click="showActionsheet">当前账本: {{currentbook}}</a>
      <a slot="right" v-link="'/record'" class="header-right" style="transform: scale(2);">+</a>
    </x-header>
    <div class="main-body">
      <date-note :bill_array="bill_array" :select="select_date">
      </date-note>
      <scroller :pulldown-config="{content:'下拉记账',downContent:'下拉前往记账',upContent:'释放跳转记账'}"
        @pulldown:loading="loadTop" height="200px" lock-x  use-pulldown bounce >
        <swipe-item class="note-card" :list="notelist" :tap="modifyNote" :remove="removeRecord">
        </swipe-item>
      </scroller>
    </div>
  </div>
  <actionsheet :show.sync="sheetVisible" :menus="notebookarr" @on-click-menu="selectNotebook">

  </actionsheet>
</template>
<script>
import { Group, Selector, XHeader, Actionsheet,Scroller} from 'vux/src/components'
import dateNote from '_comp/date-note'
import getters from '_vuex/getters'
import actions from '_vuex/actions'
import swipeItem from '_comp/swipe-item'
export default {
  data: function () {
    return {
      sheetVisible: false
    }
  },
  components: {
    dateNote,
    Group,
    Selector,
    swipeItem,
    XHeader,
    Scroller,
    Actionsheet
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
    }
  },
  methods: {
    showActionsheet: function(e){
        this.sheetVisible = true
    },
    selectNotebook(key, value) {
      this.$store.dispatch("MODIFYCURRENTNOTEBOOK", {select:key})
    },
    loadTop: function(){
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

</script>
<style>
  .header-left:before {
    content: "\2022\0020\2022\0020\2022\0020";
    font-size: 16px
  }

</style>
