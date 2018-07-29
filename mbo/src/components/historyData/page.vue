<template>
    <div>
        <div class="div-class-components">
            <div class="div-class-leftNav">
                <left-nav></left-nav> 
            </div> 
            <div class="div-class-container">
                <Content></Content>
            </div>
            
        </div>
    </div>
</template>
<script>

import LeftNav from '../common/LeftNav'
import Content from './historyContent'


export default {
    name:'homePage',

    components: {
        LeftNav,
        Content,
        
    }
}
</script>
<style lang="stylus" scoped>   
        .div-class-leftNav
            position relative
            left 50px
            top 150px
        .div-class-container
            position relative
            left 200px
    
</style>


