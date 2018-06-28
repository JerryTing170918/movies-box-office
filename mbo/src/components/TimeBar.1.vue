<template>
    <div>
        <div class="div-class-timebar">
            <span>票房日期：</span>
            <select id="selDateElm" onchange="changeDate(this.value)">
                    <option onclick="addTypeValue0()" value="2018-06-01">2018第6月</option>
                    <option onclick="addTypeValue1()"  value="2018-05-01">2018第5月</option>
                    <option onclick="addTypeValue2()"  value="2018-04-01">2018第4月</option>
                    <option onclick="addTypeValue3()" value="2018-03-01">2018第3月</option>
                    <option onclick="addTypeValue4()"  value="2018-02-01">2018第2月</option>
                    <option onclick="addTypeValue5()"  value="2018-01-01">2018第1月</option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .div-class-timebar
        display flex
        left 0
</style>
