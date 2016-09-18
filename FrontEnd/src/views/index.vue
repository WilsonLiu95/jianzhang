<template>
  <div class="animated" transition="slide">
    <mt-header fixed title="当前账本:201609">
      <mt-button v-link="'/config'" icon="more" slot="left"></mt-button>
    </mt-header>
    <div class="main-body">
      <date-note>
      </date-note>

<mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
  <ul>
    <li class="note-card" v-for="(index, item) in list">
      <span>{{item.custom_type}}</span>
      <span class="right">{{item.record_type ==="支出" ? "-" : "+"}} {{item.money}}</span>
      </li>
  </ul>
  <div slot="top" class="mint-loadmore-top">
    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
    <span v-show="topStatus === 'loading'">Loading...</span>
  </div>
</mt-loadmore>
    </div>

  </div>

</template>
<script>
import dateNote from '_comp/date-note'
import mock from '../mock'
export default {
  data: function () {
    return {
      topStatus: "drop",
      list: mock.all_record,
      curr_date:"5",
      pickerVisible: true,
    }
  },
  components: {
    'date-note': dateNote
  },
  computed:{

  },

  methods: {
    'test': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      alert(msg.toString());
//      alert(this.$data.pickerValue.toString())
    },
    loadTop: function(){
      // location.reload();
    }

  }
}
</script>
<style>

  .note-card {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    line-height: 1;
    overflow: hidden;
    padding: 16px 10px;
    position: relative;
    border-top: 1px solid #ccc;
  }
</style>
