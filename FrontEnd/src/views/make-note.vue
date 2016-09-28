<template>
  <div class="animated" transition="makenote">
    <mt-header fixed title="记一笔">
      <mt-button v-link="'/index'" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="main-body">
      <group>
        <calendar :value.sync="date" title="日期"></calendar>

        <x-input title="备注" placeholder="大出血" :value.sync="remark"></x-input>
        <x-input title="金额" placeholder="10.20" keyboard="number" :value.sync="money"></x-input>
        <checker :value.sync="custom_type_idx" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <checker-item v-for="item in user.custom_type_conf" :value="$index">{{item.custom_type}}</checker-item>
        </checker>
        <divider></divider>
        <mt-button type="primary" size="large" @click="makeNote">确认</mt-button>
      </group>
    </div>
  </div>
</template>
<script>
import { Group,Calendar,Checker, CheckerItem, XInput, Divider} from 'vux/src/components'
import getters from '_vuex/getters'
import actions from '_vuex/actions'
export default {
  data: function () {
    return {
      date: 'TODAY',
      custom_type_idx: 0,
      remark:"标注",
      money: "10.30"
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
    Divider
  },
  methods: {
    makeNote: function(){
      // 获取基本信息
      var all_record = this.$store.state.record
      var current_notebook = this.current_notebook
      var notebook = this.$store.state.notebook[current_notebook]

      var type = this.user.custom_type_conf[this.$data.custom_type_idx]

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
      // 重定向到主页
      location.href = "./#!/index"
    }
  }
}


</script>
<style>
  @import '~vux/dist/vux.css';
  .checker-popup {
    background: rgba(255, 255, 255, 0.5);
  }

  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }

  .demo1-item-selected {
    border: 1px solid green;
  }

  .main-body .vux-no-group-title {
    margin-top: 0;
  }
</style>
