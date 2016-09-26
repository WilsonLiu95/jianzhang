<template>
  <div class="animated" transition="slide">
    <mt-header fixed title="当前账本:201609">
      <mt-button v-link="'/config'" icon="more" slot="left"></mt-button>
      <mt-button v-link="'/makenote?notebook=' + curr_notebook" slot="right">+</mt-button>
    </mt-header>
    <div class="main-body">
      <date-note :bill_array="bill_array" :select.sync="select_date_idx">
      </date-note>

      <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <ul class="note-card">
          <li class="note-card-item" v-for="(index, item) in list" v-touch:swipeleft="swipeLeft" v-touch:swiperight="swipeRight">
            <div class="note-card-main">
              <span>{{item.custom_type}}</span>
              <span class="">{{item.record_type ==="支出" ? "-" : "+"}} {{item.money}}</span>
            </div>
            <div class="note-card-right">
              <span>删除</span>
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

</template>
<script>
import dateNote from '_comp/date-note'
import mock from '../mock'
import {user, record, noteBook, sync} from '../api/local'
export default {
  data: function () {
    return {
      topStatus: "drop",
      bill_array: noteBook.get(1).bill_array,
      select_date_idx: 3,
      curr_notebook: 1,
    }
  },
  components: {
    'date-note': dateNote
  },
  computed:{
    list: function(){
      var arrIdx = this.bill_array[this.select_date_idx].record_arr_idx
      var arr = []
      var all_record = record.get()

      arrIdx.forEach(function(val, idx){
        arr.push(all_record[val-1]);
      })
      return arr
    }
  },
  ready(){
    getSearch().date ? this.$data.select_date_idx = Number(getSearch().date) - 1 : null
  },
  methods: {
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

        location.href = "./#!/makenote?notebook=" + that.$data.curr_notebook
      },100)

    }

  }
}

</script>
<style>
  .note-card-item {
    background-color: #fff;
    font-size: 16px;
    line-height: 1;
    height:40px;
    position: relative;
    border-top: 1px solid #ccc;
    width:120%;
  }
  li {
    list-style: none;
  }
  .swipeleft {
    animation:swipeleft 0.5s forwards;
    -moz-animation:swipeleft 0.5s forwards; /* Firefox */
    -webkit-animation:swipeleft 0.5s forwards; /* Safari and Chrome */
    -o-animation:swipeleft 0.5s forwards; /* Opera */
  }
  .swiperight {
    animation:swiperight 0.5s forwards;
    -moz-animation:swiperight 0.5s forwards; /* Firefox */
    -webkit-animation:swiperight 0.5s forwards; /* Safari and Chrome */
    -o-animation:swiperight 0.5s forwards; /* Opera */
  }
  .note-card-item div {
    display: inline-block;
    height:40px;
  }
  .note-card-main {
    float: left;
    width:83.33%;
  }
  .note-card-right {
    float: left;
    width:16%;
    background-color: red;
  }

  @keyframes swipeleft
  {
    from {margin-left: 0}
    to {margin-left: -60px}
  }

  @-moz-keyframes swipeleft /* Firefox */
  {
    from {margin-left: 0}
    to {margin-left: -60px}
  }

  @-webkit-keyframes swipeleft /* Safari 和 Chrome */
  {
    from {margin-left: 0}
    to {margin-left: -60px}
  }
  @keyframes swiperight
  {
    from {margin-left: -60px}
    to {margin-left: 0px}
  }
  @-moz-keyframes swiperight /* Firefox */
  {
    from {margin-left: -60px}
    to {margin-left: 0px}
  }

  @-webkit-keyframes swiperight /* Safari 和 Chrome */
  {
    from {margin-left: -60px}
    to {margin-left: 0px}
  }

</style>
