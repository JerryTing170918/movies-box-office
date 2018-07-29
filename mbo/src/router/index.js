import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import YearData from '@/components/yearData/page';
import HistoryData from '@/components/historyData/page';
import HistoryDataPage1 from '@/components/historyData/page1';
import HistoryDataPage2 from '@/components/historyData/page2';
import HistoryDataPage3 from '@/components/historyData/page3';
import HistoryDataPage4 from '@/components/historyData/page4';
import HistoryDataPage5 from '@/components/historyData/page5';
import HistoryDataPage6 from '@/components/historyData/page6';

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
    },{
      path: '/historyData',
      name: 'HistoryData',
      component: HistoryData,
    },{
      path: '/historyData/page1',
      name: 'HistoryData',
      component: HistoryDataPage1,
    },{
      path: '/historyData/page2',
      name: 'HistoryData',
      component: HistoryDataPage2,
    },{
      path: '/historyData/page3',
      name: 'HistoryData',
      component: HistoryDataPage3,
    },{
      path: '/historyData/page4',
      name: 'HistoryData',
      component: HistoryDataPage4,
    },{
      path: '/historyData/page5',
      name: 'HistoryData',
      component: HistoryDataPage5,
    },{
      path: '/historyData/page6',
      name: 'HistoryData',
      component: HistoryDataPage6,
    },
  ]
})
