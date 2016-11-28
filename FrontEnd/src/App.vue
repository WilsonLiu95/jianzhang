<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import store from './vuex/index'
  export default {
    data: function () {
      return {

      }
    },
    store: store,
    ready () {
      AppCacheListen();
    }
  }
      function AppCacheListen() {
        var appCache = window.applicationCache;
        window.addEventListener('load', function (e) {
        appCache.addEventListener('updateready', function (e) {
            if (appCache.status == appCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                appCache.swapCache();
                if (confirm('有新版本，确定重新加载?')) {
                    window.location.reload();
                }
            } else {
                // Manifest didn’t changed. Nothing new to server.
                console.log("manifest didn\'t change");
            }
        }, false);
      }, false);}
</script>

<style>
  /* 初始化 */

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100%;
    background-color: #F4F6F1;
  }

  body,
  ul,
  li {
    padding: 0;
    margin: 0;
    border: 0;
  }

  .main-body {
    height: 100%;
    padding-top: 62px;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .hide {
    display: none;
  }
  /* 公共组件 */

  #app > div:first-child {
    height: 100%;
  }

  .vux-header {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  #app .vux-header {
    width: 100%;
    position: fixed;
    z-index: 10;
    height: 62px;
    /*background: linear-gradient(180deg, #B6977B, #AD8F75);*/
    background-color: #A68A70;

  }
  #app .vux-header::after {
    content: "";
    z-index: 5;
    display: block;
    height: 10px;
    background-image: url(./assets/bolang.jpeg);
    background-size:35px 7px;
    opacity: 1;
    background-repeat: repeat-x;
    background-position:bottom;

  }
  .vux-header .vux-header-left {
    margin-top: 6px;
    font-weight: 500
  }

  #app .vux-header {
    padding-top: 12px;
  }

  #app .vux-header h1 {
    font-size: 24px;
  }

  #app .vux-header .vux-header-left .vux-header-back:before {
    border-width: 3px 0 0 3px;
  }
</style>
