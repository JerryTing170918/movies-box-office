<template>
    <div>
        <div class="div-class-container">
            <table>
                <tr>
                    <th class="th-class-one">排名.影片名</th>
                    <th>周冠数量</th>
                    <th>总票房(万)</th>
                    <th>国家及地区</th>
                    <th>上映日期</th>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/45997.jpg" alt="" width=75></div>
                        <div class="div-class-right">1.阿凡达</div>
                    </td>
                    <td>10</td>
                    <td>133985</td>
                    <td>美国</td>
                    <td>2010-01-04 周一</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/46029.jpg" alt="" width=75></div>
                        <div class="div-class-right">2.集结号</div>
                    </td>
                    <td>6</td>
                    <td>21041</td>
                    <td>中国香港/中国/韩国</td>
                    <td>2007-12-20 周四</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/229733.jpg" alt="" width=75></div>
                        <div class="div-class-right">3.战狼2</div>
                    </td>
                    <td>5</td>
                    <td>567896</td>
                    <td>中国</td>
                    <td>2017-07-27 周四</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/196613.jpg" alt="" width=75></div>
                        <div class="div-class-right">4.速度与激情7</div>
                    </td>
                    <td>5</td>
                    <td>242658</td>
                    <td>美国/日本</td>
                    <td>2015-04-12 周日</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/138762.jpg" alt="" width=75></div>
                        <div class="div-class-right">5.西游降魔篇</div>
                    </td>
                    <td>5</td>
                    <td>124699</td>
                    <td>中国/中国香港</td>
                    <td>2013-02-10 周日</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/44693.jpg" alt="" width=75></div>
                        <div class="div-class-right">6.满城尽带黄金甲</div>
                    </td>
                    <td>5</td>
                    <td>29103</td>
                    <td>中国/中国香港</td>
                    <td>2006-12-14 周四</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/59588.jpg" alt="" width=75></div>
                        <div class="div-class-right">7.画皮</div>
                    </td>
                    <td>4</td>
                    <td>20470</td>
                    <td>中国/中国香港/新加坡</td>
                    <td>2008-09-26 周五</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/211794.jpg" alt="" width=75></div>
                        <div class="div-class-right">8.捉妖记</div>
                    </td>
                    <td>4</td>
                    <td>244001</td>
                    <td>中国</td>
                    <td>2015-07-16 周四</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/99400.jpg" alt="" width=75></div>
                        <div class="div-class-right">9.唐山大地震</div>
                    </td>
                    <td>4</td>
                    <td>65015</td>
                    <td>中国香港/中国</td>
                    <td>2010-07-22 周四</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/118999.jpg" alt="" width=75></div>
                        <div class="div-class-right">10.金陵十三钗</div>
                    </td>
                    <td>4</td>
                    <td>59227</td>
                    <td>中国/中国香港</td>
                    <td>2011-12-15 周四</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="stylus" scoped>
.div-class-container
    width 100%
    height auto
    .th-class-one
        width 20%
    td 
        font-size 12px

    .td-class-movieName 
        text-align center
        display flex
        .div-class-left
            display none
        .div-class-right
            margin-left 50px
            display inline
        
            
tr:hover .td-class-movieName .div-class-left{
    display inline-block
    float left
}
tr:hover .td-class-movieName .div-class-right{
    float right
    margin-left 0
    
}



    
        
        
</style>