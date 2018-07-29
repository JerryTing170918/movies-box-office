<template>
    <div>
        <div class="div-class-leftNavWrapper">
            <div class="div-class-option">
                <router-link to="/">
                    <div class="div-class-optionItem">月度票房</div><hr>   
                </router-link>
                <router-link to="/yearData">
                    <div class="div-class-optionItem">年度票房</div><hr>
                </router-link>
                <router-link to="/historyData">
                    <div class="div-class-optionItem">历史票房</div><hr>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'leftNav',
    
}
</script>
<style lang="stylus" scoped>    
    .div-class-leftNavWrapper
        text-align center
        position fixed
        top 250px
        width 80px
        height 126px
        box-shadow: 0 0 4px rgba(0,0,0,.2);
        .div-class-option
            width 72px
            display inline-block
            a
                text-decoration: none;
                .div-class-optionItem
                    height 40px
                    line-height 40px
                    font-size 14px
                hr 
                    margin 0
                    padding 0

</style>


