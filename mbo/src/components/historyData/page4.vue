<template>
    <div>
        <div class="div-class-container">
            <table>
                <tr>
                    <th class="th-class-one">排名.影片名</th>
                    <th>单月票房(万)</th>
                    <th>月份</th>
                    <th>场均人次	</th>
                    <th>月度占比</th>
                    <th>上映日期</th>
                    <th>月内天数</th>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">1.复仇者联盟3：无限战争</div>
                    </td>
                    <td>动作</td>
                    <td>189444</td>
                    <td>67.8%</td>
                    <td>279614</td>
                    <td>2018-05-11 周五</td>
                    <td>1.40</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/211901.jpg" alt="" width=75></div>
                        <div class="div-class-right">2.变形金刚5：最后的骑士</div>
                    </td>
                    <td>动作</td>
                    <td>163815</td>
                    <td>69.4%</td>
                    <td>236074</td>
                    <td>2017-06-23 周五</td>
                    <td>1.35</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">3.速度与激情8</div>
                    </td>
                    <td>动作</td>
                    <td>163104</td>
                    <td>67.6%</td>
                    <td>241183</td>
                    <td>2017-04-14 周五</td>
                    <td>1.35</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/225759.jpg" alt="" width=75></div>
                        <div class="div-class-right">4.侏罗纪世界2</div>
                    </td>
                    <td>科幻</td>
                    <td>163050</td>
                    <td>52.5%</td>
                    <td>310365</td>
                    <td>2018-06-15 周五</td>
                    <td>1.60</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/242167.jpg" alt="" width=75></div>
                        <div class="div-class-right">5.我不是药神</div>
                    </td>
                    <td>喜剧</td>
                    <td>146431</td>
                    <td>49.3%</td>
                    <td>297094</td>
                    <td>2018-07-05 周四</td>
                    <td>1.67</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/253823.jpg" alt="" width=75></div>
                        <div class="div-class-right">6.后来的我们</div>
                    </td>
                    <td>剧情</td>
                    <td>145725</td>
                    <td>43.9%</td>
                    <td>332224</td>
                    <td>2018-04-28 周六</td>
                    <td>1.77</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/253688.jpg" alt="" width=75></div>
                        <div class="div-class-right">7.西虹市首富</div>
                    </td>
                    <td>喜剧</td>
                    <td>143109</td>
                    <td>22.6%</td>
                    <td>634624</td>
                    <td>2018-07-27 周五</td>
                    <td>1.35</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/237182.jpg" alt="" width=75></div>
                        <div class="div-class-right">8.捉妖记2</div>
                    </td>
                    <td>魔幻</td>
                    <td>138786</td>
                    <td>35.7%</td>
                    <td>389024</td>
                    <td>2018-02-16 周五</td>
                    <td>1.19</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/195922.jpg" alt="" width=75></div>
                        <div class="div-class-right">9.环太平洋2：雷霆再起</div>
                    </td>
                    <td>动作</td>
                    <td>135469</td>
                    <td>44.6%</td>
                    <td>303864</td>
                    <td>2018-03-23 周五</td>
                    <td>1.53</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/208175.jpg" alt="" width=75></div>
                        <div class="div-class-right">10.蜘蛛侠：英雄归来</div>
                    </td>
                    <td>动作</td>
                    <td>132433</td>
                    <td>51.6%</td>
                    <td>256684</td>
                    <td>2017-09-08 周五</td>
                    <td>1.54</td>
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