<template>
    <div>
        <div class="div-class-leftNavWrapper">
            <div class="div-class-option">
                <div class="div-class-optionItem">月度票房</div><hr>
                <div class="div-class-optionItem">年度票房</div><hr>
                <div class="div-class-optionItem">历史票房</div><hr>
                <div class="div-class-optionItem"></div><hr>
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
        width 80px
        height 168px
        box-shadow: 0 0 4px rgba(0,0,0,.2);
        .div-class-option
            display inline-block
            width 72px
            .div-class-optionItem
                height 40px
                line-height 40px
                font-size 14px
            hr 
                margin 0
                padding 0

</style>


