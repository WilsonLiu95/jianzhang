<template>
  <ul class="note-card">
    <li class="note-card-item" v-for="(index, item) in notelist" track-by="$index" v-if="item.state" v-touch:swipeleft="swipeLeft"
      v-touch:swiperight="swipeRight">
      <div class="note-card-main" v-touch:tap="modifyNote(index)">
        <span>{{item.custom_type}}</span>
        <span class="">{{item.record_type ==="支出" ? "-" : "+"}} {{item.money.toFixed(2)}}</span>
      </div>
      <div class="note-card-right">
        <span v-touch:tap="removeRecord(index)">删除</span>
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
    'submit': {
      type: Function
    }
   },
  methods: {
    addEvent: function(e){
			var ev = e || window.event;
			var clickEl = ev.element || ev.target;
			var value = clickEl.textContent || clickEl.innerText;
			if(clickEl.tagName.toLocaleLowerCase() === 'td' && value === "OK"){
				this.submit()
			}else if(clickEl.tagName.toLocaleLowerCase() === 'td' && value == "C"){
          this.result = ""
			}else if(clickEl.tagName.toLocaleLowerCase() === 'td' && value === "删除"){
				var num = this.result;
				if(num){
					var newNum = num.substr(0, num.length - 1);
					this.result = newNum;
				}
			}else if(clickEl.tagName.toLocaleLowerCase() === 'td'){
        	this.result += value;
      }
		}
  }}
</script>
<style scoped>


</style>
