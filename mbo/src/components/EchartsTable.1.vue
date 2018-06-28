<template>
  <div class="div-class-echartsTable">
    <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import axios from 'axios';

export default {

	name: 'echartsTable',
	data(){
		return{
            xydata:[]
            
        }
	},
	created() {
    // axios.get('https://api.myjson.com/bins/1gj18m')//线上接口
		axios.get('../static/data.json')//本地模拟接口
		.then(response=>{
			// this.xydata=response.data;data表示的是asios接受的json文件
			this.xydata=response.data[0];
			console.log(this.xydata)
		})
		.catch(error=>{
			alert('设备未联网')
		});
  },

  mounted() {
    this.drawLine();
	},

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'),'vintage')
      // 绘制图表
      // 指定图表的配置项和数据
      var option = {
		    title: {
		      text: '2018年6月内地票房',
		      //统计表标题居中
		      left: 'center',
		      subtext: '数据来自网络'
		    },
		    //在中间位置用颜色代表统计的数据类型
		    tooltip: {
		      trigger: 'axis',
		      axisPointer: {
		        type: 'shadow'
		      }
		    },
		    grid: {
		      left: '3%',
		      right: '4%',
		      bottom: '3%',
		      containLabel: true
		    },
		    xAxis: {
		      type: 'value',
		      boundaryGap: [0, 0.01]
		    },
		    yAxis: {
					type: 'category',
					//如何获取json数据
					data:[],
		      // data: ['其它','深海越狱','泄密者','潜艇总动员：海底两万里','幸福马上来','厕所英雄','猛虫过江','复仇者联盟3：无线战争','哆啦A梦：大雄的金银岛','超时空同居','侏罗纪世界2'],
		    },
		    //name与legend对应,树状条的颜色可以在此修改
		    series: [
		      {
						type: 'bar',
						//如何获取json数据						
						data:[],
            // data: [18759, 5089, 5974, 7163, 7295, 9286,13545,19878,20705,27873,109655],
            itemStyle:{
              normal:{
                color:'rgb(79, 184, 249)'
              }
            },
		      }
		    ],
		  };
        
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
