<template>
  <div class="keyboard-wrapper">
    <table @click="addEvent">
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr>
          <td style="background-color:#D3D9DF;">.</td>
          <td>0</td>
          <td style="background-color:#D3D9DF;">删除</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  props:{
    'result':{
      type: String
      },
   },
  methods: {
    addEvent: function(e){
			var ev = e || window.event;
			var clickEl = ev.element || ev.target;
			var value = clickEl.textContent || clickEl.innerText;
			if(clickEl.tagName.toLocaleLowerCase() === 'td' && value !== "删除"){
					this.result += value;
			}else if(clickEl.tagName.toLocaleLowerCase() === 'div' && value === "完成"){
				body.removeChild(self.el);
			}else if(clickEl.tagName.toLocaleLowerCase() === 'td' && value === "删除"){
				var num = this.result;
				if(num){
					var newNum = num.substr(0, num.length - 1);
					this.result = newNum;
				}
			}
		}
  }}
</script>

<style scoped>
  .keyboard-wrapper {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 160px;
    background-color: rgb(255, 255, 255);
  }

  .keyboard-wrapper table {
    width: 100%;
    height: 160px;
    text-align: center;
    border: 0;
    border-top: 1px solid #CECDCE;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #FFF;
  }

  .keyboard-wrapper td {
    width: 33%;
    border: 1px solid #ddd;
    border-right: 0;
    border-top: 0;
    padding: 0;
  }

  .keyboard-wrapper td:hover {
    background-color: #1FB9FF;
    color: #FFF;
  }
</style>
</style>
