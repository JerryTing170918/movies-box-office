<template>
    <div>
        <div class="div-class-timebar">
            <!-- <button @click="handleClick">事件</button> -->
            <span>票房日期</span>
            <select id="selDateElm" v-on:change="getMonthValue()">
                    <option  value="2018-06-01">2018第6月</option>
                    <option  value="2018-05-01">2018第5月</option>
                    <option  value="2018-04-01">2018第4月</option>
                    <option  value="2018-03-01">2018第3月</option>
                    <option  value="2018-02-01">2018第2月</option>
                    <option  value="2018-01-01">2018第1月</option>
            </select>
        </div>
    </div>
</template>
<script>
// 引入兄弟组件通信的桥梁
import eventdata from './event.js'
export default {
    name:'timeBar',
    methods: {
        getMonthValue(){
            var myselect=document.getElementById("selDateElm");
            this.index=myselect.selectedIndex
            eventdata.$emit('getDataClick', this.index)
            console.log('timeBar中点击事件获取的月份下标'+this.index)
        },
    }
}
</script>
<style lang="stylus" scoped>
    .div-class-timebar
        display flex
        left 0
</style>