<template>
    <div>
        <div class="div-class-block">
            
        </div>
        <div  class="div-class-MovieItemsWrapper">
            <div class="div-class-movieItemTitle">
                电影详情
            </div>
            <div class="div-class-movieItem">
                <div v-for="moiveItem in movieItems">
                    <div class="div-class-movieImgWrapper">
                        <div class="div-class-movieImg">

                            <!-- 注意src之前要加冒号，v-bind: -->
                            <img v-bind:src = moiveItem.imgSrc>
                        </div>
                        <div class="div-class-movieOthers">
                            <div class="div-class-movieName">{{moiveItem.movieName}}</div>
                            <div class="div-class-movieCity">{{moiveItem.movieCity}}</div>
                            <div class="div-class-movieDirector">{{moiveItem.movieDirector}}</div>
                            <div class="div-class-movieStarring">{{moiveItem.movieStarring}}</div>
                            <div class="div-class-movieType">{{moiveItem.movieType}}</div>
                        </div>
                    </div>
                    <hr>
                </div>
                
            </div>
    
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'moviesItems',
    data(){
        return{
            movieItems:[]
            
        }
    },
    created() {
        // axios.get('https://api.myjson.com/bins/1gj18m')//线上接口
        axios.get('../static/movieItems.json')//本地模拟接口
        .then(response=>{
        // this.movieItems=response.data;data表示的是asios接受的json文件
        this.movieItems=response.data[0];

        })
        .catch(error=>{
        alert('设备未联网')
        });
    },
}
</script>
<style lang="stylus" scoped> 
    .div-class-block
        height 50px
    .div-class-MovieItemsWrapper
        box-shadow: 0 0 4px rgba(0,0,0,.2);
        border 1px solid rgb(216, 215, 213)
        width 660px
        .div-class-movieItemTitle
            font-size 30px
            color rgb(189, 140, 119)
            height 40px
            line-height 50px
        .div-class-movieItem
            width auto
            padding 10px
            .div-class-movieImgWrapper
                display flex
                box-shadow: 0 0 4px rgba(0,0,0,.2);
                border 1px solid rgb(216, 215, 213)
                img 
                    display block
                .div-class-movieOthers
                    height 400px
                    div
                        text-align left
                        padding-left 5px
                        font-size 14px
                        height 80px
                        line-height 80px



        
</style>

<!-- <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/225759.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：侏罗纪世界2</div>
            <div class="div-class-movieCity">国家：美国</div>
            <div class="div-class-movieDirector">导演：胡安·安东尼奥·巴亚纳 Juan Antonio Bayona</div>
            <div class="div-class-movieStarring">主演：克里斯·帕拉特 / 布莱丝·达拉斯·霍华德</div>
            <div class="div-class-movieType">类型：动作 / 科幻 / 冒险</div>
        </div>
    </div>
    <hr> -->
    <!-- <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/250729.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">超时空同居</div>
            <div class="div-class-movieCity">国家：中国大陆</div>
            <div class="div-class-movieDirector">导演：苏伦 </div>
            <div class="div-class-movieStarring">主演：雷佳音 / 佟丽娅</div>
            <div class="div-class-movieType">类型：奇幻 / 爱情 / 喜剧</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/247378.jpg">
            
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：哆啦A梦：大雄的金银岛</div>
            <div class="div-class-movieCity">国家：日本</div>
            <div class="div-class-movieDirector">导演：今井一晓</div>
            <div class="div-class-movieStarring">主演：水田山葵 / 大原惠美</div>
            <div class="div-class-movieType">类型：动画 / 奇幻 / 冒险</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/217497.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：复仇者联盟3：无限战争</div>
            <div class="div-class-movieCity">国家：美国</div>
            <div class="div-class-movieDirector">导演：安东尼·罗素 / 乔·罗素</div>
            <div class="div-class-movieStarring">主演：克里斯·帕拉特 / 布莱丝·达拉斯·霍华德</div>
            <div class="div-class-movieType">类型：动作 / 科幻 / 奇幻 / 冒险</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/234987.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：猛虫过江</div>
            <div class="div-class-movieCity">国家：中国大陆</div>
            <div class="div-class-movieDirector">导演：小沈阳</div>
            <div class="div-class-movieStarring">主演：小沈阳 / 潘斌龙</div>
            <div class="div-class-movieType">类型：喜剧 / 动作</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/668778.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">厕所英雄</div>
            <div class="div-class-movieCity">什里·那拉扬·辛</div>
            <div class="div-class-movieDirector">阿克谢·库玛尔 / 阿努潘·凯尔</div>
            <div class="div-class-movieStarring">主演：阿克谢·库玛尔 / 阿努潘·凯尔 </div>
            <div class="div-class-movieType">类型：剧情 / 喜剧</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/223686.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：超人总动员2</div>
            <div class="div-class-movieCity">国家：美国</div>
            <div class="div-class-movieDirector">导演：布拉德·伯德</div>
            <div class="div-class-movieStarring">主演：格雷格·T·尼尔森 / 霍利·亨特</div>
            <div class="div-class-movieType">类型：喜剧 / 动作 / 动画 / 冒险</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/235583.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：幸福马上来</div>
            <div class="div-class-movieCity">国家：中国大陆</div>
            <div class="div-class-movieDirector">导演：冯巩 / 崔俊杰</div>
            <div class="div-class-movieStarring">主演：冯巩 / 毛俊杰 </div>
            <div class="div-class-movieType">类型：喜剧</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/254656.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：潜艇总动员：海底两万里</div>
            <div class="div-class-movieCity">国家：美国</div>
            <div class="div-class-movieDirector">导演：申宇</div>
            <div class="div-class-movieStarring">主演：克里斯·帕拉特 / 布莱丝·达拉斯·霍华德</div>
            <div class="div-class-movieType">类型：动画 / 奇幻 / 冒险</div>
        </div>
    </div>
    <hr>
    <div class="div-class-movieImgWrapper">
        <div class="div-class-movieImg">
            <img src="http://www.cbooo.cn/moviepic/250595.jpg">
        </div>
        <div class="div-class-movieOthers">
            <div class="div-class-movieName">片名：泄密者</div>
            <div class="div-class-movieCity">国家：香港</div>
            <div class="div-class-movieDirector">导演：邱礼涛</div>
            <div class="div-class-movieStarring">主演：吴镇宇 / 张智霖 </div>
            <div class="div-class-movieType">类型：剧情 / 犯罪</div>
        </div>
    </div>
    <hr> -->

[
    [
        {
            "imgSrc":"http://www.cbooo.cn/moviepic/225759.jpg",
            "movieName":"片名：侏罗纪世界2",
            "movieCity":"国家：美国",
            "movieDirector":"导演：胡安·安东尼奥·巴亚纳 Juan Antonio Bayona",
            "movieStarring":"主演：克里斯·帕拉特 / 布莱丝·达拉斯·霍华德",
            "movieType":"类型：动作 / 科幻 / 冒险"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/250729.jpg",
            "movieName":"超时空同居",
            "movieCity":"国家：中国大陆",
            "movieDirector":"导演：苏伦",
            "movieStarring":"主演：雷佳音 / 佟丽娅",
            "movieType":"类型：奇幻 / 爱情 / 喜剧"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/247378.jpg",
            "movieName":"片名：哆啦A梦：大雄的金银岛",
            "movieCity":"国家：日本",
            "movieDirector":"导演：今井一晓",
            "movieStarring":"主演：水田山葵 / 大原惠美",
            "movieType":"类型：动画 / 奇幻 / 冒险"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/217497.jpg",
            "movieName":"片名：复仇者联盟3：无限战争",
            "movieCity":"国家：美国",
            "movieDirector":"导演：安东尼·罗素",
            "movieStarring":"主演：克里斯·帕拉特 / 布莱丝·达拉斯·霍华德",
            "movieType":"类型：动作 / 科幻 / 奇幻 / 冒险"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/234987.jpg",
            "movieName":"片名：猛虫过江",
            "movieCity":"国家：中国大陆",
            "movieDirector":"导演：小沈阳",
            "movieStarring":"主演：小沈阳 / 潘斌龙",
            "movieType":"类型：喜剧 / 动作"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/668778.jpg",
            "movieName":"厕所英雄",
            "movieCity":"国家：印度",
            "movieDirector":"导演：什里·那拉扬·辛",
            "movieStarring":"主演：阿克谢·库玛尔 / 阿努潘·凯尔 ",
            "movieType":"类型：剧情 / 喜剧"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/223686.jpg",
            "movieName":"片名：超人总动员2",
            "movieCity":"国家：美国",
            "movieDirector":"导演：布拉德·伯德",
            "movieStarring":"主演：格雷格·T·尼尔森 / 霍利·亨特",
            "movieType":"类型：喜剧 / 动作 / 动画 / 冒险"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/235583.jpg",
            "movieName":"片名：幸福马上来",
            "movieCity":"国家：中国大陆",
            "movieDirector":"导演：冯巩 / 崔俊杰",
            "movieStarring":"主演：冯巩 / 毛俊杰",
            "movieType":"类型：喜剧"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/254656.jpg",
            "movieName":"片名：潜艇总动员：海底两万里",
            "movieCity":"国家：美国",
            "movieDirector":"导演：申宇",
            "movieStarring":"主演：克里斯·帕拉特 / 布莱丝·达拉斯·霍华德",
            "movieType":"类型：动画 / 奇幻 / 冒险"
        },{
            "imgSrc":"http://www.cbooo.cn/moviepic/250595.jpg",
            "movieName":"片名：泄密者",
            "movieCity":"国家：香港",
            "movieDirector":"导演：邱礼涛",
            "movieStarring":"主演：格雷格·T·尼尔森 / 霍利·亨特",
            "movieType":"类型：喜剧 / 动作 / 动画 / 冒险"
        }
    ],[
        {
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        }
    ],[
        {
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        }
    ],[
        {
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        }
    ],[
        {
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        }
    ],[
        {
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        },{
            "imgSrc":"aaa",
            "movieName":"aaa",
            "movieCity":"aaa",
            "movieDirector":"aaa",
            "movieStarring":"aaa",
            "movieType":"aaa"
        }
    ]
]

[
    [
        {
            "movie":["其它","深海越狱","泄密者","潜艇总动员：海底两万里","幸福马上来","厕所英雄","猛虫过江","复仇者联盟3：无线战争","哆啦A梦：大雄的金银岛","超时空同居","侏罗纪世界2"]
        },{
            "data":[18759, 5089, 5974, 7163, 7295, 9286,13545,19878,20705,27873,109655]
        }
    ],[
        {
            "movie":["其他","我是你妈","头号玩家","巴霍巴利王2：终结","游侠索罗：星球大战外传","狂暴巨兽","寂静之地","幕后玩家","后来的我们","超时空同居","复仇者联盟3：无限战争"]
        },{
            "data":[17526,3619,4148,7633,8142,14710,19190,20647,57569,60711,218171]
        }
    ],[
        {
            "movie":["其他","暴裂无声","冰雪女皇3：火与冰","湮灭","环太平洋2：雷霆再起","21克拉","幕后玩家","起跑线","后来的我们","狂暴巨兽","头号玩家"]
        },{
            "data":[43929,5373,6383,6509,8394,10677,15199,20857,78183,84386,110761]
        }
    ],[
        {
            "movie":["其他","捉妖记2","比得兔","头号玩家","小萝莉的猴神大叔","厉害了，我的国","古墓丽影：源起之战","唐人街探案2","环太平洋2：雷霆再起","黑豹","红海行动"]
        },{
            "data":[55978,11873,15775,24637,28314,43893,48578,51881,54861,66054,109727]
        }
    ],[
        {
            "movie":["其他","无问东西","移动迷宫3：死亡解药","祖宗十八代","南极之恋","神秘巨星","熊出没：变形记","西游女儿国","捉妖记12","红海行动","唐人街探案2"]
        },{
            "data":[53612,10633,11579,14570,23322,26432,54809,70479,211734,250016,287257]
        }
    ],[
        {
            "movie":["其他","二代妖精之今生有幸","公牛历险记","奇迹男孩","移动迷宫3：死亡解药","芳华","星球大战：最后的绝地武士","勇敢者游戏：决战丛林","神秘巨星","无问东西","前任3：再见前任"]
        },{
            "data":[ 62537,12249,13503,13611,19938,23177,26739,47643,48243,64730,162589]
        }
    ]

]


