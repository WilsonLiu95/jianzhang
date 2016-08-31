<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
    <p>{{wilson}}</p>
<input type="text" :value="liu">
<button @click="notify">event</button>
  </div>
</template>

<script>
import { getCount } from '_vuex/getters'
export default {
  props:["wilson"],
  data(){
    return {
    liu : "00000",
    he: "hehe"
    }
  },
  vuex: {
    getters: {
      // note that you're passing the function itself, and not the value 'getCount()'
      counterValue: getCount
    }
  },
  ready(){
    console.log(this)
  },
  methods: {
    notify: function(){
      this.$dispatch("test",this.liu)
    }
  }
}
</script>
