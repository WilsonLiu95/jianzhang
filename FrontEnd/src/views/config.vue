<template>
  <div class="animated" transition="slide">
    <!--<mt-header fixed title="设置">
      <mt-button v-link="'/index'" icon="back" slot="left"></mt-button>
    </mt-header>-->
    <x-header  :left-options="{showBack: true}" style="linear-gradient(180deg,#303036,#3c3b40)">
      <a slot >设置</a>
    </x-header>
    <div class="main-body">
      <mt-cell title="类别管理" href="/#!/noteType" is-link></mt-cell>
      <mt-cell title="账本管理" href="/#!/noteBook" is-link></mt-cell>

    </div>

  </div>

</template>
<script>
import { Group, Selector, XHeader} from 'vux/src/components'
export default {
  data: function () {
    return {
      title: "test标题"
    }
  },
  components: {
XHeader
  },
  computed:{

  },

  methods: {
    'test': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      alert(msg.toString());
//      alert(this.$data.pickerValue.toString())
    }

  }
}


</script>
<style>
  a {
    text-decoration: none;
  }

</style>
