<template>
    <div>
        <div class="div-class-container">
            <div>
                <router-link to="/historyData/page1">内地总票房排行</router-link>
                <div class="div-class-wrapper">
                    <div class="div-class-left">
                        <img class="div-class-picture" src="http://www.cbooo.cn/moviepic/229733.jpg" width=60>
                    </div>
                    <div class="div-class-right">
                        <div class="div-class-movieName">战狼2</div>
                        <div class="div-class-quantity">567895万</div>
                    </div>
                    
                </div>
            </div>
            <div>
                <router-link to="/historyData/page2">单月票房排行</router-link>
                <div class="div-class-wrapper">
                    <div class="div-class-left">
                        <img class="div-class-picture" src="http://www.cbooo.cn/moviepic/229733.jpg" width=60>
                    </div>
                    <div class="div-class-right">
                        <div class="div-class-movieName">战狼2</div>
                        <div class="div-class-quantity">424048万</div> 
                    </div>
                    
                </div>
            </div>
            <div>
                <router-link to="/historyData/page3">单日票房排行</router-link>
                <div class="div-class-wrapper">
                    <div class="div-class-left">
                        <img class="div-class-picture" src="http://www.cbooo.cn/moviepic/237182.jpg" width=60>
                    </div>
                    <div class="div-class-right">
                        <div class="div-class-movieName">捉妖记2</div>
                        <div class="div-class-quantity">54678万</div>
                    </div>

                </div>
            </div>
            <div>
                <router-link to="/historyData/page4">单日排片场次排行</router-link>
                <div class="div-class-wrapper">
                    <div class="div-class-left">
                        <img class="div-class-picture" src="http://www.cbooo.cn/moviepic/217497.jpg" width=60>
                    </div>
                    <div class="div-class-right">
                        <div class="div-class-movieName">复仇者联盟3：无限战争</div>
                        <div class="div-class-quantity">189444场</div>
                    </div>

                </div>
            </div>
            <div>
                <router-link to="/historyData/page5">过亿速度排行</router-link>
                <div class="div-class-wrapper">
                    <div class="div-class-left">
                        <img class="div-class-picture" src="http://www.cbooo.cn/moviepic/222673.jpg" width=60>
                    </div>
                    <div class="div-class-right">
                        <div class="div-class-movieName">万万没想到</div>
                        <div class="div-class-quantity">首映</div>
                    </div>

                </div>
            </div>
            <div>
                <router-link to="/historyData/page6">连续周冠次数排行</router-link>
                <div class="div-class-wrapper">
                    <div class="div-class-left">
                        <img class="div-class-picture" src="http://www.cbooo.cn/moviepic/45997.jpg" width=60>
                    </div>
                    <div class="div-class-right">
                        <div class="div-class-movieName">阿凡达</div>
                        <div class="div-class-quantity">10周</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="stylus" scoped>
.div-class-container
    width 300px
    left 340px
    a 
        display block
        text-decoration none
        margin-top 15px
    .div-class-wrapper
        box-shadow: 0 0 4px rgba(0,0,0,.2);
        height 90px
        display flex
        .div-class-movieName,.div-class-quantity
            text-align left
            margin-top 15px

    
        
        
</style>