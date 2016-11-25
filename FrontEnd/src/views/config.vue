<template>
  <div>
    <x-header :left-options="{showBack: true}">
      <a slot>设置</a>
    </x-header>
    <div class="main-body">
      <group>
        <cell title="类别管理" is-link link="/ctype"></cell>
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
import { Cell, Group, XHeader, Divider} from 'vux/src/components'
export default {
  data() {
    return {

    }
  },
  components: {XHeader,Cell,Group,Divider},
  computed:{

  },
  methods: {
  }
}


</script>
<style>

</style>
