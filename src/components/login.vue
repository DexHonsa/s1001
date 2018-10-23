<template>
    <div class="container">
        <Header/>
        <div class="login-page">
            <div class="login-main-panel">
                <div class="login-main-panel-logo"><img src="../img/logo_1.png" alt=""></div>
                <form  @submit.prevent="submitForm">
      
      
      
        <div class="login-box-input-item">
          <div class="login-box-input-icon"><i class="fa fa-user-circle" /></div>
            <input type="text" id="username" name="username" placeholder="Username" class="css-login-input-input" />
        </div>
    <div class="login-box-input-item">
          <div class="login-box-input-icon"><i class="fa fa-lock" /></div>
            <input type="password" id="password" name="password" placeholder="Password" class="css-login-input-input" />
        </div>
    
    <div class="modal-btn-container">
        <div @click="toggleVisible" class="modal-btn cancel">Cancel</div>
    <button class="modal-btn confirm" type="submit"><span v-if="!isLoading">Login</span></button>
    
    </div>
    <div v-if="hasError" class="alert-danger animated fadeIn animate-fix" style="color:#ff0000; text-align:center; clear:both">{{errorMessage}}</div>
    <div class="forgot-password">Forgot Password?</div>
    </form>
                
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./header";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    Header
  }
};
</script>
<style>
.login-page {
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.login-main-panel {
  background: #fff;
  border: solid 1px #eaeaea;
  position: relative;
  border-radius: 5px;
  box-shadow: var(--shadow);
  padding: 78px 35px;
  max-width: 400px;
}
.login-main-panel-logo {
  height: 50px;
  text-align: center;
  width: 100%;
  margin-bottom: 45px;
}
.login-main-panel-logo img {
  height: 100%;
}
</style>
