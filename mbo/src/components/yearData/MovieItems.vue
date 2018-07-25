<template>
    <div>
        <div class="div-class-block">
            
        </div>
        <div  class="div-class-MovieItemsWrapper">
            <div class="div-class-movieItemTitle">
                电影详情
            </div>
            <div class="div-class-movieItem">
                <!-- 在模板中必须至少要有一个data中的数据，不让无法触发updated钩子 -->
		        <!-- <div style="display:none">{{ index }}</div> -->
                <div v-for="moiveItem in movieItems[index]">
                    <div class="div-class-movieImgWrapper">
                        <div class="div-class-movieImg">

                            <!-- 注意src之前要加冒号，v-bind: -->
                            <img v-bind:src = moiveItem.imgSrc>
                        </div>
                        <div class="div-class-movieOthers">
                            <!-- <a href="https://movie.douban.com/" target="_blank" class="div-class-movieName">{{moiveItem.movieName}}</a> -->
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
// 引入兄弟组件通信的桥梁
import eventdata from './event.js'
export default {
    name:'moviesItems',
    data(){
        return{
            movieItems:[],
            index:0
            
        }
    },
    created () {
        eventdata.$on('getDataClick', data => {
			this.index = data
		});
    },
    mounted(){
        // console.log('moviesItems: mounted')
        this.getMovieItems();
    },
    
    methods:{
        getMovieItems(){
            // axios.get('https://api.myjson.com/bins/1gj18m')//线上接口
            axios.get('../static/yearDataMovieItems.json')//本地模拟接口
            .then(response=>{
            // const data = response.data
            // this.movieItems=response.data;data表示的是asios接受的json文件
            this.movieItems=response.data
            // this.movieItems=response.data[index];
            console.log('getMovieItems中index: '+this.index)
            })
            .catch(error=>{
            alert('设备未联网')
            });
        }
    }
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