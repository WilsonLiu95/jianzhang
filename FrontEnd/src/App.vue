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
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body,
  ul,
  li {
    padding: 0;
    margin: 0;
    border: 0;
  }

  .main-body {
    position: relative;
    top: 42px;
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
</style>
