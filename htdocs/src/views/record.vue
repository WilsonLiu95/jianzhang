<template>
  <div>
    <x-header :left-options="{showBack: true, preventGoBack: true}" @on-click-back="click_back">
      <a slot>记一笔</a>
    </x-header>
    <div class="main-body">
      <group>
        <calendar :value.sync="date" title="日期"></calendar>
        <x-input title="备注" placeholder="大出血" :value.sync="remark" :required=false></x-input>
        <x-input title="金额" placeholder="10.20" :value.sync="money" :readonly=true></x-input>

        <checker :value.sync="custom_type_idx" default-item-class="customtype-item" selected-item-class="customtype-item-selected">
          <checker-item v-for="item in user.custom_type_conf" :value="$index">
            <span v-if="item.record_type == '收入'" style="color:#B6977B;">+</span>
            {{item.custom_type}}
            </checker-item>
        </checker>
        <divider></divider>
      </group>
    </div>
    <keyboard :result.sync="money" :submit="submit"></keyboard>
  </div>

</template>
<script>
import { Group,Calendar,Checker, CheckerItem, XInput, Divider,XHeader} from 'vux/src/components'
import getters from '_vuex/getters'
import actions from '_vuex/actions'
import keyboard from '_comp/keyboard'
export default {
  data: function () {
    return {
      date: 'TODAY',
      custom_type_idx: 0,
      remark:"",
      money: "",
    }
  },
  vuex: {
    getters: {
      current_notebook: getters.current_notebook,
      user: getters.user
    },
    actions
  },
  components: {
    Calendar,
    Group,
    Checker,
    CheckerItem,
    XInput,
    Divider,
    XHeader,
    keyboard
  },
  ready(){
    var index = util.getSearch().index
    var that = this
    if (index) {
      var rd = this.$store.state.record[index]
      var custom_type = this.$store.state.user.custom_type_conf
      custom_type.forEach(function(val,idx){
        if(val.custom_type === rd.custom_type){
          that.custom_type_idx = idx
        }
      })
      // 为修改
      this.date = rd.date
      this.remark = rd.comment
      this.money = String(rd.money)
    }
  },
  methods: {
    click_back: function(){
      // 重定向到主页
      if(util.getSearch().hasJumpRecord){
        location.href = "./#!/index?hasJumpRecord=true"
      } else {
        location.href = "./#!/index"
      }
    },
    submit: function(){
      // 获取基本信息
      var all_record = this.$store.state.record
      var current_notebook = this.current_notebook
      var notebook = this.$store.state.notebook[current_notebook]

      var type = this.user.custom_type_conf[this.$data.custom_type_idx]
      var index = Number(util.getSearch().index)

      if (util.getSearch().index !== undefined) {

        // 存在则为更改
        var newRecord = {
          date: this.date,
          update_time: new Date(),
          record_type: type.record_type,
          custom_type: type.custom_type,
          comment: this.remark,
          money: Number(this.money)
        }

        // 调用VUEX的action来分发
        this.modifynote(newRecord, index)

      } else {
        // 构建record
        var newRecord = {
          note_book_id: current_notebook,
          user_seq_num: all_record.length,
          record_seq_num: notebook.record_num + 1,
          create_time: new Date(),
          update_time: "",
          date: this.$data.date, // 日期
          day_of_week: new Date(this.$data.date).getDay(), // 周几
          state: 1,
          account_type: "现金",
          record_type: type.record_type,
          custom_type: type.custom_type,
          comment: this.$data.remark,
          money: Number(this.$data.money)
        }

        // 调用VUEX的action来分发mutations
        this.makenote(newRecord)
      }
      // 重定向到主页
      if(util.getSearch().hasJumpRecord){
        location.href = "./#!/index?hasJumpRecord=true"
      } else {
        location.href = "./#!/index"
      }
    }
  }
}


</script>
<style>
  .weui_cells {
    background-color: #F4F6F1;
  }

  .inline-calendar {
    background-color: #F4F6F1
  }

  @import '~vux/dist/vux.css';
  .checker-popup {
    background: rgba(255, 255, 255, 0.5);
  }

  .vux-checker-box {
    padding: 0 15px;
    height: 200px;
    overflow-y: scroll;
  }

  .customtype-item {
    width: 60px;
    height: 30px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ececec;
    border-radius: 5px;
    overflow-x: auto;
    white-space: nowrap;
    margin: 1px 2px;
    padding: 5px 5px;
  }

  .customtype-item-selected {
    background-color: #A1B7CC;
    color: #FFF;
  }

  .main-body .vux-no-group-title {
    margin-top: 0;
  }

  @media (max-height: 490px) {
    /* iphone4 为480px */
    .vux-checker-box {
      height: 150px;
    }
    .customtype-item {
      font-size: 12px;
    }
  }
</style>
