<template>
  <div class="animated" transition="makenote">
    <mt-header fixed title="记一笔">
      <mt-button v-link="'/index'" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="main-body">
      <calendar :value.sync="date" title="日期"></calendar>
      <x-input title="备注" placeholder="大出血" :value.sync="remark"></x-input>
      <x-input title="金额" placeholder="10.20"  keyboard="number" :value.sync="money"></x-input>
      <checker :value.sync="custom_type"  default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for="item in custom_type_conf" :value="item.custom_type">{{item.custom_type}}</checker-item>
      </checker>
      <divider></divider>
      <mt-button type="primary" size="large" @click="makeNote">确认</mt-button>
    </div>

  </div>
</template>
<script>
import { Group,Calendar,Checker, CheckerItem, XInput, Divider} from 'vux/src/components'
import {user, record, noteBook, sync} from '../api/local'

export default {
  data: function () {
    return {
      date: 'TODAY',
      custom_type: "",
      remark:"标注",
      money: "10.30",
      custom_type_conf: user.get().custom_type_conf
    }
  },
  components: {
    Calendar,
    Group,
    Checker,
    CheckerItem,
    XInput,
    Divider
  },
  computed:{

  },

  methods: {
    makeNote: function(){
      var newRecord = {}
      for(var key in this.$data){
        newRecord[key] = this.$data[key]
      }
      debugger
      var a = record.get();
      a.push(newRecord);
      record.set(a) // 压入all_record中
    }
  }
}


</script>
<style>
  @import '~vux/dist/vux.css';
  .checker-popup {
    background: rgba(255,255,255,0.5);
  }
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }
  .demo1-item-selected {
    border: 1px solid green;
  }
</style>
