<template>
  <ul class="ctype-list">
    <li class="ctype-item" v-for="(index, item) in list" track-by="$index"  @touchmove="move(index)"  @touchend="end(index)" >
      <div class="ctype-item-main" @touchstart="touchstart($index)"  v-touch:swipeleft="ctypeLeft($index)" v-touch:tap="ctypetap(index)" :class="{'current':currentIndex==$index}">
        <span>{{item.custom_type}}</span>
        <span>{{item.record_type}}</span>
        <span class="drag-btn">==</span>
      </div>
      <div class="ctype-item-right">
        <div v-touch:tap="_remove(index)" class="ctype-item-del">删除</div>
      </div>
    </li>
  </ul>
</template>

<script>
  var touchparam = {
    isDrag: false
  }
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
    ready(){

    },
    methods: {
      _remove: function (index) {
        this.remove(index)
//        归位
        this.currentIndex = -1
      },
      ctypeLeft (_index){
//        event.preventDefault();
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
      ctypetap (_index) {
        var index = _index;
        if (index >= 0 && !this.isTouchSwipe) {
          this.tap(index)
        }
        this.isTouchSwipe = false
      },
      move: function (index) {
        if (event.target.className.indexOf("drag-btn") === -1){
          return false
        }
        var el = event.target.parentElement.parentElement
        event.preventDefault();
        if (touchparam.movetop){
          el.style.top = event.changedTouches[0].clientY - touchparam.movetop + 'px'
        }
        el.style.zIndex = 20
        if (!touchparam.isDrag) {
          touchparam.isDrag = true
          touchparam.eltop = el.offsetTop
          touchparam.movetop = event.changedTouches[0].clientY
        }
      },
      end: function (index) {
        if (event.target.className.indexOf("drag-btn") === -1){
          return false
        }
        var el = event.target.parentElement.parentElement
        el.style.zIndex = 2
        touchparam = {isDrag: false}
        var _a = parseInt(el.style.top, 10) / 64
        var a = _a < 0 ? Math.ceil(_a)+1 : Math.ceil(_a)
        var target =  this.list.splice(index, 1)
        el.style.top = 0
        this.list.splice(index + a -1, 0, target[0])
        this.$store.dispatch("USER",{user: this.$parent.user})
      },

    }}


</script>
<style scoped>
  .ctype-item {
    position: relative;
    height: 64px;
    line-height:48px;
    z-index: 2;
  }
  .current {
    transform: translate3d(-60px,0,0);
    -webkit-transform: translate3d(-60px,0,0);
  }
  .ctype-item-main {
    position: relative;
    left: 0;
    width: 100%;
    padding: 8px;
    z-index: 2;
    background-color: #F4F6F1;
    height: 100%;
    transition: transform .1s linear;
  }

  .ctype-item-right {
    position: absolute;
    z-index: 1;
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
  }

  .ctype-item-right > div {
    display: flex;
    justify-content: center;
    z-index: 1;
    align-items: center;
    background-color: #c7c7cc;
    color: #fff;
    font-size: 18px;
    padding: 0 12px;
  }

  .ctype-item-right .ctype-item-del {
    background-color: #ff3b30;
  }

  .ctype-item:not(:first-child)::before {
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

  .ctype-item:last-child:after {
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
  .drag-btn {
    float:right;
    width:60px;
  }
</style>
