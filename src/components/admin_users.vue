<template>
    <div>
        <Header />
       
        <div class="main-container container">
            <Sidebar activePage="admin_settings" activeSubPage="users" />

            <div class="content-panels animated-med fadeInUp">
              <div class="content-panel">
                <div class="content-panel-inner">

                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./header";
import Sidebar from "./sidebar";

export default {
  name: "financial",
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style>
</style>
