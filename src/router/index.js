import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/dashboard";
import Financial from "@/components/financial";
import FinancialAssetValuation from "@/components/financial_asset_valuation";
import Leasing from "@/components/leasing";
import DataSources from "@/components/data_sources";
import DataSourcesThirdParty from "@/components/data_sources_third_party";
import Reporting from "@/components/reporting";
import AdminUsers from "@/components/admin_users";
import AdminAssets from "@/components/admin_assets";
import AdminClients from "@/components/admin_clients";
import Login from "@/components/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/financial",
      name: "financial",
      component: Financial
    },
    {
      path: "/financial/asset_valuation",
      name: "asset valuation",
      component: FinancialAssetValuation
    },
    {
      path: "/leasing",
      name: "leasing",
      component: Leasing
    },
    {
      path: "/data_sources",
      name: "data sources",
      component: DataSources
    },
    {
      path: "/data_sources/third_party",
      name: "data sources",
      component: DataSourcesThirdParty
    },
    {
      path: "/reporting",
      name: "reporting",
      component: Reporting
    },
    {
      path: "/admin_settings",
      name: "admin users",
      component: AdminUsers
    },
    {
      path: "/admin_settings/assets",
      name: "admin assets",
      component: AdminAssets
    },
    {
      path: "/admin_settings/clients",
      name: "admin clients",
      component: AdminClients
    },
    {
      path: "/admin_settings/iot",
      name: "admin iot",
      component: AdminUsers
    },
    {
      path: "/admin_settings/valuation",
      name: "admin valuation",
      component: AdminUsers
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
