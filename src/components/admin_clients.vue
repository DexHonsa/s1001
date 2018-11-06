<template>
    <div>
        <CreateClient :hide="toggleCreateClient" v-if="createClient" />
        <Header />
       
        <div class="main-container container">
            <Sidebar activePage="admin_settings" activeSubPage="clients" />

            <div class="content-panels animated-med fadeInUp">
              <div class="content-panel">
                    <div class="content-panel-top blue" style="border-bottom:none;">
                       
                        <div class="content-panel-top-options">
                              <span><div @click="toggleCreateClient" class="modal-btn cancel">New Client</div></span>
                        </div>
                    </div>
                    <div>
                        <div v-if="!isLoading" class="table-container">
                            <table class="project-view-table">
                                <tbody>
                                <tr>
                                    
                                    <th>Client Name <i class="fa fa-caret-up"></i></th>
                                    <th>Properties</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    
                                    <td> Douglas Elliman</td>
                                    <td>El Camino Real</td>
                                    <td><i class="fa fa-times"></i><i class="fa fa-edit"></i> <i class="fa fa-lock"></i></td>
                                </tr>
                                <tr>
                                  
                                    <td>Douglas Elliman</td>
                                    <td>El Camino Real</td>
                                    <td><i class="fa fa-times"></i><i class="fa fa-edit"></i> <i class="fa fa-lock"></i></td>
                                </tr>
                                <tr>
                                 
                                    <td>Douglas Elliman</td>
                                    <td>El Camino Real</td>
                                    <td><i class="fa fa-times"></i><i class="fa fa-edit"></i> <i class="fa fa-lock"></i></td>
                                </tr>
                                
                                </tbody>
                            </table>
                            
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>
<script>
import CreateClient from "./admin_create_client";
import Header from "./header";
import Sidebar from "./sidebar";

export default {
  name: "financial",
  data() {
    return {
      createClient: false
    };
  },
  components: {
    Header,
    Sidebar,
    CreateClient
  },
  mounted() {},
  computed: {},
  methods: {
    toggleCreateClient() {
      this.createClient = !this.createClient;
    }
  }
};
</script>
<style scoped>
.project-view-table tr {
  cursor: default;
}
.project-view-table tr td:first-of-type {
  max-width: 30px;
  color: #94a7b9;
}
.project-view-table tr td:last-of-type {
  max-width: 150px;
  color: #94a7b9;
  text-align: right;
}
.project-view-table tr:hover i {
  opacity: 1 !important;
}
.project-view-table tr td:last-of-type i {
  opacity: 0;
  cursor: pointer;
  margin-left: 10px;
  font-size: 15pt;
}
.project-view-table tr td:last-of-type i:hover {
  color: #000;
}
</style>
