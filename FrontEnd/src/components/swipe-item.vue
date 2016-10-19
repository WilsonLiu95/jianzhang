<template>
  <ul class="swipe-list">
    <li class="swipe-item" v-for="(index, item) in list" track-by="$index"
      v-if="item.state" v-touch:swipeleft="swipeLeft($index)" >
      <div class="swipe-item-main" @touchstart="touchstart($index)" v-touch:tap="swipetap(index)" :class="{'current':currentIndex==$index}">
        <span>{{item.custom_type}}</span>
        <span class="">{{item.record_type ==="支出" ? "-" : "+"}} {{item.money.toFixed(2)}}</span>
      </div>
      <div class="swipe-item-right">
        <div v-touch:tap="remove(index)" class="swipe-item-del">删除</div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  props:{
    'list': {
      type: Array
      },
    'tap': {
      type: Function
    },
    'remove': {
      type: Function
    },

   },
   data() {
     return {
        currentIndex: -1, //列表item处在左划状态
        isTouchSwipe: false, //验证是否处于左划状态
     }
   },
  methods: {
    swipeLeft (_index){
                  event.stopPropagation()
            if (!this.isTouchSwipe) {
                this.isTouchSwipe = true
                this.currentIndex = _index
            } else {
                this.isTouchSwipe = false
            }
    },
    touchstart (_index) {
      this.currentIndex = -1
    },
    swipetap (_index) {
            var index = _index;
            if (index >= 0 && !this.isTouchSwipe) {
              this.tap(index)
            }
            this.isTouchSwipe = false
    }
  }}
</script>
<style scoped>
  .swipe-item {
    position: relative;
    height: 64px;
  }
  .current {
    transform: translate3d(-60px,0,0);
    -webkit-transform: translate3d(-60px,0,0);
  }
  .swipe-item-main {
    position: relative;
    left: 0;
    width: 100%;
    padding: 8px;
    z-index: 2;
    background-color: #fff;
    height: 100%;
    transition: transform .1s linear;
  }

  .swipe-item-right {
    position: absolute;
    z-index: 1;
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
  }

  .swipe-item-right > div {
    display: flex;
    justify-content: center;
    z-index: 1;
    align-items: center;
    background-color: #c7c7cc;
    color: #fff;
    font-size: 18px;
    padding: 0 12px;
  }

  .swipe-item-right .swipe-item-del {
    background-color: #ff3b30;
  }

  .swipe-item:not(:first-child)::before {
    content: "";
    position: absolute;
    width: 200%;
    left: 8px;
    top: 0;
    transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
    background-color: #b7b7b7;
    height: 1px;
    z-index: 3;
  }

  .swipe-item:last-child:after {
    content: "";
    position: absolute;
    width: 200%;
    z-index: 3;
    left: 8px;
    bottom: 0;
    transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
    background-color: #b7b7b7;
    height: 1px;
  }
</style>
