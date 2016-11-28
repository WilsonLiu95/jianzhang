<template>
  <div>
    <x-header :left-options="{showBack: true}">
      <a slot>设置</a>
    </x-header>
    <div class="main-body">
      <group>
        <cell title="类别管理" is-link link="/ctype"></cell>
        <switch title="启动时打开记账页面" :value="is_start_record" @on-change="change"></switch>
        <!--<cell title="账本管理" is-link></cell>-->
        <divider>联系我们</divider>
        <cell title="Q攻城狮-Wilson" link="http://wpa.qq.com/msgrd?v=3&uin=527622467&site=qq&menu=yes">
          <!--<img slot="icon" src="../assets/qq.gif" alt="">-->
        </cell>
        <cell title="Q设计狮-邓爽" link="http://wpa.qq.com/msgrd?v=3&uin=1048247193&site=qq&menu=yes">
          <!--<img slot="icon" src="../assets/qq.gif" alt="">-->
        </cell>
      </group>
    </div>

  </div>

</template>
<script>
import { Cell, Group, XHeader, Divider, Switch} from 'vux/src/components'
  import getters from '_vuex/getters'
  import actions from '_vuex/actions'
export default {
  data() {
    return {

    }
  },
  components: {XHeader,Cell,Group,Divider,Switch},
  ready(){

  },
  vuex: {
    getters,actions
  },
  methods: {
    change: function(){
      debugger
      this.user.is_start_record = !this.user.is_start_record
        this.$store.dispatch("USER",{user: this.user})
    }
  }
}


</script>
<style>

</style>
