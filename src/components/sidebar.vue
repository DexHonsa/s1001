<template>
    <div class="left-sidebar">
        <div @click="$router.push('/')" class="sidebar-option" :class="{'active':activePage == 'dashboard'}"><img src="../img/icon_1.svg" alt=""> Dashboard</div>
        <div @click="$router.push('/financial')" class="sidebar-option" :class="{'active':activePage == 'financial'}"><img src="../img/icon_2.svg" alt=""> Financial</div>
        <div class="sidebar-option" :class="{'active':activePage == 'leasing'}"><img src="../img/icon_3.svg" alt=""> Leasing</div>
        <div class="sidebar-option" :class="{'active':activePage == 'settings'}"><img src="../img/icon_4.svg" alt=""> Settings</div>
        <div class="sidebar-option" :class="{'active':activePage == 'reporting'}"><img src="../img/icon_5.svg" alt=""> Reporting</div>
    </div>
</template>
<script>
export default {
  name: "sidebar",
  props: ["activePage"],
  moutned() {}
};
</script>