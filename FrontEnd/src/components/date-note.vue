<template>
  <div id="wrapper">
    <div id="scroller" :style="{width: getDay +'px'}">
      <ul>
        <li v-for="(index, note) in bill_array" class="date-note-item" v-touch:tap="selectDate(index)" :class="{highlight: index+1 == select}">
          <h5>{{note.date}}号</h5>
          <span>- {{note.payout.toFixed(2)}}</span>
          <br>
          <span>+ {{note.income.toFixed(2)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IScroll from 'iscroll'

export default {
  props:{
    'bill_array':{
      type:Array
    },
    'select': {
      type: Number,
      default: 1
    }},
 computed: {
      getDay (){
        return this.bill_array.length * 75
      }
    },
    methods: {
      selectDate: function(index){
        index++
        this.$store.dispatch("MODIFYSELECTDATE", {select: index})
      }
    },
  ready() {
	  window.dateScroll = new IScroll('#wrapper', {
      eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, snap: 'li' });
    dateScroll.goToPage(this.select - 3, 0, 100)
    bindEvent(this);
  }
}

function bindEvent(that){
  that.$watch("select", function(newVal, oldVal){
    dateScroll.goToPage(newVal - 3 ,0, 100)
  })
  that.$watch("getDay", function(newVal, oldVal){
  	  window.dateScroll = new IScroll('#wrapper', {
      eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, snap: 'li' });
    dateScroll.goToPage(that.select - 3, 0, 0)

  })
  dateScroll.on('scrollEnd', function(e){
    that.select = dateScroll.currentPage.pageX + 3
    that.$store.dispatch("MODIFYSELECTDATE", {select: that.select})
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #wrapper {
    position: relative;
    z-index: 1;
    height: 75px;
    width: 100%;
    background: #ccc;
    overflow: hidden;
    -ms-touch-action: none;
  }

  #scroller {
    position: absolute;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100px;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
  }

  #scroller ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #scroller li {
    width: 75px;
    height: 75px;
    float: left;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #fafafa;
    font-size: 14px;
    overflow: hidden;
    text-align: center;
  }

  #scroller li.highlight {
    background: #ccc;
  }
  .date-note-item {
    border-radius: 75px;
  }
</style>
