<template>
    <div class="top-bar">
        <LoginForm :hide="showLogin" v-if="login"/>
                    <div class="container top-bar-inner">
                        <div class="logo"><img src="../img/logo_1.png" alt=""></div>
                        <div class="left-options">
                            <div class="date-options">
                                <div class="standard-input-item" style="max-width: 250px">
                                    
                                        <datepicker id="project_start_date" name="project_start_date" input-class="standard-input  date-input icon"></datepicker>
                                    <div class="standard-input-icon"><i class="fa fa-calendar" /></div>
                                </div>
                            </div>
                            <div class="menu-search">
                                <StandardInputIcon
                                    name="search"
                                    icon="fa-search"
                                    width="200px"
                                    placeholder="Search"
                                 />
                            </div>
                            <div @click="toggleProfileMenu" class="profile-option">
                                <i class="fa fa-user-circle"></i>
                                <transition
                                        enter-active-class="zoomIn2"
                                        leave-active-class="fadeOutDown"
                                      >
                                <div v-if="profileMenu" class="dropdown-panel animated-fast">
                                    <div class="dropdown-title">Menu</div>
                                    <div class="dropdown-option">Profile</div>
                                    <div class="dropdown-option">Settings</div>
                                    <div class="dropdown-option">Logout</div>
                                    <div @click="showLogin" class="dropdown-option">Login</div>
                                </div>
                                </transition>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
</template>
<script>
import StandardInputIcon from "./form_elements/standard_input_icon";
import Datepicker from "vuejs-datepicker";
import LoginForm from "./login_form";
export default {
  name: "head",
  data() {
    return {
      profileMenu: false,
      login: false
    };
  },
  methods: {
    toggleProfileMenu() {
      this.profileMenu = !this.profileMenu;
    },
    showLogin() {
      this.login = !this.login;
    }
  },
  components: {
    StandardInputIcon,
    Datepicker,
    LoginForm
  }
};
</script>
