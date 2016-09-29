<template>
  <div class="animated" transition="slide">
    <mt-header fixed :title="'当前账本:' + currentbook" @click="selectNotebook">
      <mt-button v-link="'/config'" icon="more" slot="left"></mt-button>
      <mt-button v-link="'/record'" slot="right">+</mt-button>
    </mt-header>
    <div class="main-body">
      <date-note :bill_array="bill_array" :select="select_date">
      </date-note>

      <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <ul class="note-card">
          <li class="note-card-item" v-for="(index, item) in notelist" track-by="$index" v-if="item.state" v-touch:swipeleft="swipeLeft"
            v-touch:swiperight="swipeRight" v-touch:tap="modifyNote(index)">
            <div class="note-card-main">
              <span>{{item.custom_type}}</span>
              <span class="">{{item.record_type ==="支出" ? "-" : "+"}} {{item.money}}</span>
            </div>
            <div class="note-card-right">
              <span v-touch:tap="removeRecord(index)">删除</span>
            </div>

          </li>
        </ul>
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
import { Group, Selector} from 'vux/src/components'
import dateNote from '_comp/date-note'
import getters from '_vuex/getters'
import actions from '_vuex/actions'

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
    Selector
  },
  vuex: {
    getters
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
      if (e.target.className.indexOf("mint-header-title") !== -1){
        this.sheetVisible = true
      }
    },
    swipeLeft: function (e) {
      if (e.target.parentElement.className.indexOf("note-card-item") === -1) return
      e.target.parentElement.classList.remove("swiperight")
      e.target.parentElement.classList.add("swipeleft")
    },
    swipeRight: function (e) {
      if (e.target.parentElement.className.indexOf("note-card-item") === -1) return
      e.target.parentElement.classList.remove("swipeleft")
      e.target.parentElement.classList.add("swiperight")
    },
    loadTop: function(){
      var that = this // 缓存Vue对象
      setTimeout(function () {
        this.topStatus = 'drop'
        location.href = "./#!/record"
      },100)
    },
    removeRecord: function(index){
      var option = {}
      var idx = this.bill_array[this.select_date - 1].record_arr_idx[index]
      option.index = idx
      this.$store.dispatch("REMOVERECORD", option)
     },
     modifyNote: function(index){
       var idx = this.bill_array[this.select_date - 1].record_arr_idx[index]
       location.href = "./#!/record?index=" + idx
     }
  }
}

</script>
<style>
  .note-card-item {
    background-color: #fff;
    font-size: 16px;
    line-height: 1;
    height: 40px;
    position: relative;
    border-top: 1px solid #ccc;
    width: 120%;
  }

  li {
    list-style: none;
  }

  .swipeleft {
    animation: swipeleft 0.5s forwards;
    -moz-animation: swipeleft 0.5s forwards;
    /* Firefox */
    -webkit-animation: swipeleft 0.5s forwards;
    /* Safari and Chrome */
    -o-animation: swipeleft 0.5s forwards;
    /* Opera */
  }

  .swiperight {
    animation: swiperight 0.5s forwards;
    -moz-animation: swiperight 0.5s forwards;
    /* Firefox */
    -webkit-animation: swiperight 0.5s forwards;
    /* Safari and Chrome */
    -o-animation: swiperight 0.5s forwards;
    /* Opera */
  }

  .note-card {
    min-height: 400px;
  }

  .note-card-item div {
    display: inline-block;
    height: 40px;
  }

  .note-card-main {
    float: left;
    width: 83.33%;
  }

  .note-card-right {
    float: left;
    width: 16%;
    background-color: red;
  }

  @keyframes swipeleft {
    from {
      margin-left: 0
    }
    to {
      margin-left: -60px
    }
  }

  @-moz-keyframes swipeleft
  /* Firefox */

  {
    from {
      margin-left: 0
    }
    to {
      margin-left: -60px
    }
  }

  @-webkit-keyframes swipeleft
  /* Safari 和 Chrome */

  {
    from {
      margin-left: 0
    }
    to {
      margin-left: -60px
    }
  }

  @keyframes swiperight {
    from {
      margin-left: -60px
    }
    to {
      margin-left: 0px
    }
  }

  @-moz-keyframes swiperight
  /* Firefox */

  {
    from {
      margin-left: -60px
    }
    to {
      margin-left: 0px
    }
  }

  @-webkit-keyframes swiperight
  /* Safari 和 Chrome */

  {
    from {
      margin-left: -60px
    }
    to {
      margin-left: 0px
    }
  }
</style>
