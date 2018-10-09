import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Financial from '@/components/financial'
import FinancialAssetValuation from '@/components/financial_asset_valuation';
import Leasing from '@/components/leasing';
import DataSources from '@/components/data_sources';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/financial',
      name: 'financial',
      component: Financial
    },
    {
      path: '/financial/asset_valuation',
      name: 'asset valuation',
      component: FinancialAssetValuation
    },
    {
      path: '/leasing',
      name: 'leasing',
      component: Leasing
    },
    {
      path: '/data_sources',
      name: 'data sources',
      component: DataSources
    }
    
  ]
})
