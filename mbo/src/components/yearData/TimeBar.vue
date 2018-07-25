<template>
    <div>
        <div class="div-class-timebar">
            <!-- <button @click="handleClick">事件</button> -->
            <span>票房年份</span>
            <select id="opelm" v-on:change="getYearValue()">
                    <option value="2018">2018年</option>
                    <option value="2017">2017年</option>
                    <option value="2016">2016年</option>
                    <option value="2015">2015年</option>
                    <option value="2014">2014年</option>
                    <option value="2013">2013年</option>
                    <option value="2012">2012年</option>
                    <option value="2011">2011年</option>
                    <option value="2010">2010年</option>
                    <option value="2009">2009年</option>
                    <option value="2008">2008年</option>
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
        getYearValue(){
            var myselect=document.getElementById("opelm");
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