<template>
    <div>
        <div class="div-class-components">
            <div class="div-class-leftNav">
                <div class="div-class-ln">
                   <left-nav></left-nav> 
                </div>
            </div> 
            <div class="div-class-middleConteniar">
                <div class="div-class-bigTable">
                    <Time-bar></Time-bar>
                    <echarts-table></echarts-table> 
                </div>
                <div class="div-class-movieItems">
                    <movie-items></movie-items>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EchartsTable from './EchartsTable'
import LeftNav from './LeftNav'
import MovieItems from './MovieItems'
import TimeBar from './TimeBar'


export default {
    name:'homePage',
    components: {
        EchartsTable,
        TimeBar,
        LeftNav,
        MovieItems,
    },
    
}
</script>
<style lang="stylus" scoped>   
.div-class-components
    display flex
    position relative
    .div-class-leftNav
        display inline-block
        position relative
        width 200px
        .div-class-ln
            position relative
            left 50px
            top 150px
    .div-class-middleConteniar
        height auto
        .div-class-bigTable
            position relative
            width 600px
            display inline-block
            box-shadow: 0 0 4px rgba(0,0,0,.2);
            border 1px solid rgb(216, 215, 213)
            padding 30px
</style>


