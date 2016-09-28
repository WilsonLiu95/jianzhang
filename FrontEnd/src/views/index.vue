<template>
  <div class="animated" transition="slide">
    <mt-header fixed title="当前账本:201609">
      <mt-button v-link="'/config'" icon="more" slot="left"></mt-button>
      <mt-button v-link="'/makenote?notebook=' + current_notebook" slot="right">+</mt-button>
    </mt-header>
    <div class="main-body">
      <date-note :bill_array="bill_array" :select="select_date">
      </date-note>

      <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <ul class="note-card">
          <li class="note-card-item" v-for="(index, item) in notelist" v-if="item.state" v-touch:swipeleft="swipeLeft" v-touch:swiperight="swipeRight">
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

</template>
<script>
import dateNote from '_comp/date-note'
import mock from '../mock'
import getters from '_vuex/getters'
import {user, record, noteBook, sync} from '../api/local'
    localStorage.all_record ? null : record.set(mock.all_record)
    localStorage.user ? null : user.set(mock.user)
    localStorage.note_book ? null : noteBook.set(mock.note_book)
    localStorage.current_notebook ? null : localStorage.setItem("current_notebook", 0)
    localStorage.select_date ? null : localStorage.setItem("select_date", 12)

export default {
  data: function () {
    return {
      topStatus: "drop"
    }
  },
  components: {
    'date-note': dateNote
  },
  vuex: {
    getters: getters
  },
  ready(){
    var select = getSearch().date ? Number(getSearch().date) - 1 : null
    if (select) {
      this.$store.dispatch("MODIFYSELECTDATE", {select: select})
    }
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
        location.href = "./#!/makenote"
      },100)
    },
    removeRecord: function(index){
      var option = {}
      option.record = this.notelist[index] // 修改状态，变为删除
      option.index = this.bill_array[index] // 修改具体哪条
      option.record.state = 0
      this.$store.dispatch("MODIFYRECORD", option)
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
