<template>
    <div class="left-sidebar">
        <div @click="$router.push('/')" class="sidebar-option" :class="{'active':activePage == 'dashboard'}"><img src="../img/icon_1.svg" alt=""> Dashboard</div>

        <div @click="$router.push('/financial')" class="sidebar-option" :class="{'active':activePage == 'financial'}"><img src="../img/icon_2.svg" alt=""> Financial</div>
        <div @click="$router.push('/financial')" v-if="activePage == 'financial'" class="sidebar-option sub" :class="{'active':activeSubPage == 'income_expense'}" >Income Expense</div>
        <div @click="$router.push('/financial/asset_valuation')" v-if="activePage == 'financial'" class="sidebar-option sub" :class="{'active':activeSubPage == 'asset_valuation'}" >Asset Valuation</div>

        <div @click="$router.push('/leasing')" class="sidebar-option" :class="{'active':activePage == 'leasing'}"><img src="../img/icon_3.svg" alt=""> Leasing</div>

        <div @click="$router.push('/data_sources')" class="sidebar-option" :class="{'active':activePage == 'data_sources'}"><img src="../img/icon_2.svg" alt=""> Data Sources</div>
        <div @click="$router.push('/data_sources')" v-if="activePage == 'data_sources'" class="sidebar-option sub" :class="{'active':activeSubPage == 'iot'}" >IOT</div>
        <div @click="$router.push('/data_sources/third_party')" v-if="activePage == 'data_sources'" class="sidebar-option sub" :class="{'active':activeSubPage == 'third_party'}" >Third Party</div>

        <div @click="$router.push('/admin_settings')" class="sidebar-option" :class="{'active':activePage == 'admin_settings'}"><img src="../img/icon_4.svg" alt=""> Admin Settings</div>
        <div @click="$router.push('/data_sources')" v-if="activePage == 'data_sources'" class="sidebar-option sub" :class="{'active':activeSubPage == 'iot'}" >IOT</div>
        <div @click="$router.push('/reporting')" class="sidebar-option" :class="{'active':activePage == 'reporting'}"><img src="../img/icon_5.svg" alt=""> Reporting</div>
    </div>
</template>
<script>
export default {
  name: "sidebar",
  props: ["activePage", "activeSubPage"],
  mounted() {}
};
</script>