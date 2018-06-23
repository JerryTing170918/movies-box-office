<template>
    <div>
        <header></header>
        <div class="components">
            <timer></timer>
            <echarts-table></echarts-table> 
        </div>
    </div>
</template>
<script>
import EchartsTable from './EchartsTable'
import timer from './timer'

export default {
    name:'home',
    components: {
        EchartsTable,
        timer
    },
    
}
</script>
<style lang="stylus" scoped>

</style>


