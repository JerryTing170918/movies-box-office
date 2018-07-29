<template>
    <div>
        <div class="div-class-container">
            <table>
                <tr>
                    <th class="th-class-one">排名.影片名</th>
                    <th>类型</th>
                    <th>总票房(万)</th>
                    <th>平均票价</th>
                    <th>场均人次</th>
                    <th>国家及地区</th>
                    <th>上映日期</th>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/229733.jpg" alt="" width=75></div>
                        <div class="div-class-right">1.战狼2</div>
                    </td>
                    <td>动作</td>
                    <td>567896</td>
                    <td>36</td>
                    <td>38</td>
                    <td>中国</td>
                    <td>2017-07-27</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/240425.jpg" alt="" width=75></div>
                        <div class="div-class-right">2.红海行动</div>
                    </td>
                    <td>动作</td>
                    <td>364929</td>
                    <td>39</td>
                    <td>33</td>
                    <td>中国香港/中国	</td>
                    <td>2018-02-16</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/234873.jpg" alt="" width=75></div>
                        <div class="div-class-right">3.唐人街探案</div>
                    </td>
                    <td>喜剧</td>
                    <td>339728</td>
                    <td>39</td>
                    <td>39</td>
                    <td>中国</td>
                    <td>2018-02-16</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/209007.jpg" alt="" width=75></div>
                        <div class="div-class-right">4.美人鱼</div>
                    </td>
                    <td>喜剧</td>
                    <td>339211</td>
                    <td>37</td>
                    <td>44</td>
                    <td>中国/中国香港	</td>
                    <td>2016-02-08
</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/24216.jpg" alt="" width=75></div>
                        <div class="div-class-right">5.我不是药神</div>
                    </td>
                    <td>剧情</td>
                    <td>302003</td>
                    <td>35</td>
                    <td>27</td>
                    <td>中国</td>
                    <td>2018-07-05</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/224149.jpg" alt="" width=75></div>
                        <div class="div-class-right">6.速度与激情8</div>
                    </td>
                    <td>动作</td>
                    <td>267096</td>
                    <td>37</td>
                    <td>30</td>
                    <td>美国</td>
                    <td>2017-04-14</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">7.捉妖记</div>
                    </td>
                    <td>奇幻</td>
                    <td>244002</td>
                    <td>37</td>
                    <td>42</td>
                    <td>中国香港/中国</td>
                    <td>2015-07-16</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/196613.jpg" alt="" width=75></div>
                        <div class="div-class-right">8.速度与激情7</div>
                    </td>
                    <td>动作</td>
                    <td>242659</td>
                    <td>39</td>
                    <td>42</td>
                    <td>美国/日本</td>
                    <td>2015-04-12</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/217497.jpg" alt="" width=75></div>
                        <div class="div-class-right">9.复仇者联盟3：无限战争</div>
                    </td>
                    <td>动作</td>
                    <td>239042</td>
                    <td>38</td>
                    <td>19</td>
                    <td>美国</td>
                    <td>2018-05-11</td>
                </tr>
                <tr>
                    <td class="td-class-movieName">
                        <div class="div-class-left"><img src="http://www.cbooo.cn/moviepic/237182.jpg" alt="" width=75></div>
                        <div class="div-class-right">10.捉妖记2</div>
                    </td>
                    <td>喜剧</td>
                    <td>223686</td>
                    <td>38</td>
                    <td>44</td>
                    <td>中国香港/中国</td>
                    <td>2018-02-16</td>
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