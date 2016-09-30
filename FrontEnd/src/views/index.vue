<template>
  <div class="animated" transition="slide">
    <x-header  :left-options="{showBack: false}" style="linear-gradient(180deg,#303036,#3c3b40)">
      <a slot="left" v-link="'/config'" class="header-left"></a>
      <a slot @click="selectNotebook">当前账本: {{currentbook}}</a>
      <a slot="right" v-link="'/record'" class="header-right" style="transform: scale(2);">+</a>
    </x-header>
    <div class="main-body">
      <date-note :bill_array="bill_array" :select="select_date">
      </date-note>
      <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <swipe-item class="note-card" :list="notelist" :tap="modifyNote" :remove="removeRecord">
        </swipe-item>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
            </span>

        </div>
      </mt-loadmore>
    </div>
  </div>
  <mt-actionsheet :actions="notebookarr" :visible.sync="sheetVisible">
  </mt-actionsheet>
</template>
<script>
import { Group, Selector, XHeader} from 'vux/src/components'
import dateNote from '_comp/date-note'
import getters from '_vuex/getters'
import actions from '_vuex/actions'
import swipeItem from '_comp/swipe-item'
export default {
  data: function () {
    return {
      topStatus: "drop",
      sheetVisible: false
    }
  },
  components: {
    dateNote,
    Group,
    Selector,
    swipeItem,
    XHeader
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
      var arr = []
      state.notebook.forEach(function(val,index){
        // 如果是删除则不返回
        if(!val.state) return

        arr.push({
          name: val.note_book_name,
          method: function(){
            // 触发更改当前账本
            that.$store.dispatch("MODIFYCURRENTNOTEBOOK", {select:index})
          // return index
         }
        })
      })
      return arr
    }
  },
  methods: {
    selectNotebook: function(e){
        this.sheetVisible = true
    },
    loadTop: function(){
      var that = this // 缓存Vue对象
      setTimeout(function () {
        this.topStatus = 'drop'
        location.href = "./#!/record"
      },50)
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
  .note-card {
    min-height: 400px;
  }

  .header-left:before {
    content: "\2022\0020\2022\0020\2022\0020";
    font-size: 16px
  }

  /*.header-right:before {
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    left: 0;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    border-width: 1px 0 0 1px;
    margin-left: 3px;
    margin-top: 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
  }*/
</style>
