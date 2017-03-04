<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
  <div>
    <x-header :left-options="{showBack: true}">
      <a slot>类别修改</a>
      <a slot="right" class="add-ctype" style="font-size:35px; margin-top:3px" v-touch:tap="changeisShow" >+</a>
    </x-header>
    <div class="main-body">
      <scroller lock-x class="ctype-list" height="500px">
      <ctype-item :list="ctype" :tap="modifyCtype" :remove="removeCtype" >
      </ctype-item>
      </scroller>
    </div>
    <confirm :show.sync="isShow" title="新增" confirm-text="确认" cancel-text="取消" @on-confirm="confimCtype">
      <group>
        <switch title="支出" :value.sync="record_type"></switch>
        <x-input  title="类型" placeholder="新增分类名" type="text" :value.sync="custom_type"></x-input>
      </group>
    </confirm>
  </div>
</template>
<script>
  import {XHeader,Group,Alert,Confirm,Scroller,Switch,XInput} from 'vux/src/components'
  import getters from '_vuex/getters'
  import actions from '_vuex/actions'
  import ctypeItem from '_comp/ctype-item'

  export default {
    data: function () {
      return {
        modify_index: -1,
        isShow: false,
        custom_type: "",
        record_type: true
      }
    },
    components: {
      XHeader,Group,Confirm,Switch,XInput,Alert,ctypeItem,Scroller
    },
    vuex: {
      getters,actions
    },
    computed: {
      ctype: function () {
        return this.user.custom_type_conf
      }
    },
    ready(){

    },
    methods: {
      changeisShow: function () {
        this.isShow = true
      },
      removeCtype: function (index) {
        this.ctype.splice(index, 1)
        this.$store.dispatch("USER",{user: this.user})
      },
      modifyCtype: function (index) {
        this.modify_index = index
        this.isShow = true
        this.custom_type = this.ctype[index].custom_type
        this.record_type = this.ctype[index].record_type == "支出" ? true: false
      },
      confimCtype: function () {
        if (this.modify_index !== -1){
//          修改选项
          this.ctype[this.modify_index].custom_type = this.custom_type
          this.ctype[this.modify_index].record_type = this.record_type ? "支出" : "收入"
          this.modify_index = -1
        }else {
//          新增选项
          this.ctype.push({
            custom_type: this.custom_type,
            record_type: this.record_type ? "收入": "支出"
          })
        }
        this.$store.dispatch("USER",{user: this.user})
      }
    }
  }

</script>
<style>

</style>
