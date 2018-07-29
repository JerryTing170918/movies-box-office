<template>
    <div>
        <div class="div-class-container">
            <table>
                <tr>
                    <th class="th-class-one">排名.影片名</th>
                    <th>所用天数</th>
                    <th>累计票房(万)</th>
                    <th>国家及地区</th>
                    <th>达标日期</th>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/222673.jpg" alt="" width=75></div>
                        <div class="div-class-right">1.万万没想到</div>
                    </td>
                    <td>点映</td>
                    <td>11304</td>
                    <td>中国</td>
                    <td>2015-12-13 周日</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/209205.jpg" alt="" width=75></div>
                        <div class="div-class-right">2.西游记女儿国</div>
                    </td>
                    <td>点映</td>
                    <td>17932</td>
                    <td>中国香港/中国</td>
                    <td>2018-02-14 周三</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/242167.jpg" alt="" width=75></div>
                        <div class="div-class-right">3.我不是药神</div>
                    </td>
                    <td>0</td>
                    <td>16358</td>
                    <td>中国</td>
                    <td>2018-07-04 周三</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/237182.jpg" alt="" width=75></div>
                        <div class="div-class-right">4.捉妖记2</div>
                    </td>
                    <td>1</td>
                    <td>54678</td>
                    <td>中国香港/中国</td>
                    <td>2018-02-16 周五</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">5.速度与激情8</div>
                    </td>
                    <td>1</td>
                    <td>47980</td>
                    <td>美国</td>
                    <td>2017-04-14 周五</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">6.复仇者联盟3：无限战争</div>
                    </td>
                    <td>1</td>
                    <td>44678</td>
                    <td>美国</td>
                    <td>2018-05-11 周五</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/196613.jpg" alt="" width=75></div>
                        <div class="div-class-right">7.速度与激情7</div>
                    </td>
                    <td>1</td>
                    <td>39882</td>
                    <td>美国/日本</td>
                    <td>2015-04-12 周日</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/208325.jpg" alt="" width=75></div>
                        <div class="div-class-right">8.西游伏妖篇</div>
                    </td>
                    <td>1</td>
                    <td>36748</td>
                    <td>中国香港/中国</td>
                    <td>2017-01-28 周六</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/234873.jpg" alt="" width=75></div>
                        <div class="div-class-right">9.唐人街探案2</div>
                    </td>
                    <td>1</td>
                    <td>34074</td>
                    <td>中国</td>
                    <td>2018-02-16 周五</td>
                </tr>
                                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="://www.cbooo.cn/moviepic/211901.jpg" alt="" width=75></div>
                        <div class="div-class-right">10.变形金刚5：最后的骑士</div>
                    </td>
                    <td>1</td>
                    <td>33191</td>
                    <td>美国</td>
                    <td>2017-06-23 周五</td>
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