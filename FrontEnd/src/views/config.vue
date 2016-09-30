<template>
  <div class="animated" transition="slide">
    <x-header :left-options="{showBack: true}" style="linear-gradient(180deg,#303036,#3c3b40)">
      <a slot>设置</a>
    </x-header>
    <div class="main-body">
      <group>
        <cell title="类别管理" is-link></cell>
        <cell title="账本管理" is-link></cell>
      </group>
    </div>

  </div>

</template>
<script>
import { Cell, Group, XHeader} from 'vux/src/components'
export default {
  data() {
    return {

    }
  },
  components: {XHeader,Cell,Group},
  computed:{

  },
  methods: {
  }
}


</script>
<style>

</style>
