<template>
  <div class="keyboard-wrapper">
    <table v-touch:tap="addEvent">
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>删除</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td rowspan="3">OK</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>

        </tr>
        <tr>
          <td style="background-color:#D3D9DF;">C</td>
          <td>0</td>
          <td style="background-color:#D3D9DF;">.</td>

        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>

export default {
  props:{
    'result': {
      type: String
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
    .keyboard-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 190px;
    background-color: #F4F6F1;
  }

  .keyboard-wrapper table {
    width: 100%;
    height: 190px;
    text-align: center;
    border: 0;
    border-top: 1px solid #CECDCE;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #F4F6F1;
  }

  .keyboard-wrapper td {
    width: 25%;
    border: 1px solid #ddd;
    border-right: 0;
    border-top: 0;
    padding: 0;
  }
  .keyboard-wrapper td:active {
    background-color: #A1B7CC;
    color: #FFF;
  }
  @media (max-height: 490px) {
    .keyboard-wrapper {
      height: 130px;
    }
    .keyboard-wrapper table {
      height: 130px;
    }
  }
</style>
