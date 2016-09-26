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
          <checker-item v-for="item in custom_type_conf" :value="$index">{{item.custom_type}}</checker-item>
        </checker>
        <divider></divider>
        <mt-button type="primary" size="large" @click="makeNote">确认</mt-button>
      </group>
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
      custom_type_idx: 0,
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
      var all_record = record.get()
      var note_book_id = getSearch().notebook
      var notebook = noteBook.get(note_book_id)

      var type = this.$data.custom_type_conf[this.$data.custom_type_idx]

      // 新建新的record
      var newRecord = {
        note_book_id: note_book_id,
        user_seq_num: all_record.length + 1, // 序号统一为数组index + 1,按照正常的逻辑从1开始而非0
        record_seq_num: notebook.record_num + 1, // 该账本的第几条数据，不可修改字段
        create_time: new Date(),
        update_time: "",
        date: this.$data.date, // 日期
        day_of_week: new Date(this.$data.date).getDay(), // 周几
        state: 0,
        account_type: "现金",
        record_type: type.record_type,
        custom_type: type.custom_type,
        comment: this.$data.remark,
        money: parseInt(this.$data.money, 10),
      }
      all_record.push(newRecord);
      record.set(all_record) // 压入all_record中

      // 对notebook 进行修改
      notebook.record_num++ // 压入了一个记录
      var dateIdx = new Date(this.$data.date).getDate() - 1
      notebook.bill_array[dateIdx].record_arr_idx.push(newRecord.user_seq_num)
      if (newRecord.record_type === "支出"){
        notebook.bill_array[dateIdx].payout +=  newRecord.money // 修改当天总支出
        notebook.payout +=  newRecord.money
      } else {
        debugger
        notebook.bill_array[dateIdx].income += newRecord.money
        notebook.income +=  newRecord.money
      }
      noteBook.set(note_book_id, notebook) // 压入存储中
      location.href = "./#!/index?date=" + (dateIdx+1)
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
