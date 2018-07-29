<template>
    <div>
        <div class="div-class-container">
            <table>
                <tr>
                    <th class="th-class-one">排名.影片名</th>
                    <th>类型</th>
                    <th>单日票房(万)</th>
                    <th>累计票房(万)</th>
                    <th>国家与地区</th>
                    <th>日期</th>
                    <th>上映天数</th>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/237182.jpg" alt="" width=75></div>
                        <div class="div-class-right">1.捉妖记2</div>
                    </td>
                    <td>喜剧</td>
                    <td>54678</td>
                    <td>54678</td>
                    <td>中国香港/中国</td>
                    <td>2018-02-16 周五</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">2.复仇者联盟3：无限战争</div>
                    </td>
                    <td>动作</td>
                    <td>49355</td>
                    <td>94033</td>
                    <td>美国</td>
                    <td>2018-05-12 周六</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">3.速度与激情8</div>
                    </td>
                    <td>动作</td>
                    <td>48752</td>
                    <td>96732</td>
                    <td>美国</td>
                    <td>2017-04-15 周六</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/229733.jpg" alt="" width=75></div>
                        <div class="div-class-right">4.战狼2</div>
                    </td>
                    <td>动作</td>
                    <td>42636</td>
                    <td>316800</td>
                    <td>中国</td>
                    <td>2017-08-06 周日</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">5.速度与激情8</div>
                    </td>
                    <td>动作</td>
                    <td>41709</td>
                    <td>47980</td>
                    <td>美国</td>
                    <td>2017-04-14 周五</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/229733.jpg" alt="" width=75></div>
                        <div class="div-class-right">6.战狼2</div>
                    </td>
                    <td>动作</td>
                    <td>40552</td>
                    <td>274164</td>
                    <td>中国</td>
                    <td>2017-08-05 周六</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">7.复仇者联盟3：无限战争</div>
                    </td>
                    <td>动作</td>
                    <td>38726</td>
                    <td>44678</td>
                    <td>美国</td>
                    <td>2018-05-11 周五</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/242167.jpg" alt="" width=75></div>
                        <div class="div-class-right">8.我不是药神</div>
                    </td>
                    <td>喜剧</td>
                    <td>38512</td>
                    <td>94923</td>
                    <td>中国	</td>
                    <td>2018-07-07 周六</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">9.速度与激情8</div>
                    </td>
                    <td>动作</td>
                    <td>38475</td>
                    <td>135207</td>
                    <td>美国</td>
                    <td>2017-04-16 周日</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/242167.jpg" alt="" width=75></div>
                        <div class="div-class-right">10.我不是药神</div>
                    </td>
                    <td>喜剧</td>
                    <td>38450</td>
                    <td>133373</td>
                    <td>中国</td>
                    <td>2018-07-08 周日</td>
                    <td>4</td>
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