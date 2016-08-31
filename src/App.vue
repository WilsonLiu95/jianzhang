<template>
  <div id="app">
    <router-view>
    </router-view>
    <Display :wilson="test"></Display>
    <Increment></Increment>
    <input type="text" v-model="test">
  </div>
</template>

<script>
import Display from '_comp/Display.vue'
import Increment from '_comp/Increment.vue'
import store from '_vuex/store' // import the store we just created

export default{
      data: function(){
        return {
          test:"13232test"
        }
      },
        components: {
          Display: Display,
          Increment: Increment
        },
        store: store,
        ready() {
                  console.log(this)
    },
      events: {
    'test': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      alert(msg)
    }
  }
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
