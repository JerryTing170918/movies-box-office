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
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/229733.jpg" alt="" width=75></div>
                        <div class="div-class-right">1.战狼2</div>
                    </td>
                    <td>424048</td>
                    <td>2017-08</td>
                    <td>38</td>
                    <td>57.56%</td>
                    <td>2017-07-27</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/209007.jpg" alt="" width=75></div>
                        <div class="div-class-right">2.美人鱼</div>
                    </td>
                    <td>317695</td>
                    <td>2016-02	</td>
                    <td>53</td>
                    <td>46.13%</td>
                    <td>2016-02-08</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/234873.jpg" alt="" width=75></div>
                        <div class="div-class-right">3.唐人街探案2</div>
                    </td>
                    <td>287257</td>
                    <td>2018-02</td>
                    <td>54</td>
                    <td>28.32%</td>
                    <td>2018-02-16</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/240425.jpg" alt="" width=75></div>
                        <div class="div-class-right">4.红海行动</div>
                    </td>
                    <td>250015</td>
                    <td>2018-02	</td>
                    <td>56</td>
                    <td>24.65%</td>
                    <td>2018-02-16</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">5.速度与激情8</div>
                    </td>
                    <td>248946</td>
                    <td>2017-04</td>
                    <td>33</td>
                    <td>51.10%</td>
                    <td>2017-04-14</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">复仇者联盟3：无限战争</div>
                    </td>
                    <td>218294</td>
                    <td>2018-05</td>
                    <td>22</td>
                    <td>50.47%</td>
                    <td>2018-05-11</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/196613.jpg" alt="" width=75></div>
                        <div class="div-class-right">7.速度与激情7</div>
                    </td>
                    <td>213165</td>
                    <td>2015-04</td>
                    <td>45</td>
                    <td>51.89%</td>
                    <td>2015-04-12</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/237182.jpg" alt="" width=75></div>
                        <div class="div-class-right">8.捉妖记2</div>
                    </td>
                    <td>211733</td>
                    <td>2018-02	</td>
                    <td>53</td>
                    <td>20.87%	</td>
                    <td>2018-02-16</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/246526.jpg" alt="" width=75></div>
                        <div class="div-class-right">9.羞羞的铁拳</div>
                    </td>
                    <td>200614</td>
                    <td>2017-10</td>
                    <td>26</td>
                    <td>39.11%</td>
                    <td>2017-09-30</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/211794.jpg" alt="" width=75></div>
                        <div class="div-class-right">10.捉妖记</div>
                    </td>
                    <td>165845</td>
                    <td>2015-07</td>
                    <td>55</td>
                    <td>30.12%</td>
                    <td>2015-07-16</td>
                    <td>27</td>
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