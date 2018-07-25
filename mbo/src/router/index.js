import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import YearData from '@/components/yearData/page';
// import HistoryData from '@/components/historyData';

import $ from 'jquery';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },{
      path: '/yearData',
      name: 'YearData',
      component: YearData,
    },
  ]
})
