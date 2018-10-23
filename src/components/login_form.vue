<template lang="html">
  <div class="overlay animated-fast " :class="{'fadeIn':visible,'fadeOut':!visible}" >
    <div class="modal-1 animated-fast " :class="{'zoomIn':visible,'zoomOut':!visible}" style="width: 400px">
      <form class="login-form" @submit.prevent="submitForm">
      
      
      <div class="login-panel-title">Login</div>
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
</template>
<script>
export default {
  name: "login_form",
  props: ["hide", "login"],
  data() {
    return {
      visible: true,
      hasError: false,
      isLoading: false,
      errorMessage: ""
    };
  },
  $_veeValidate: {
    validator: "new" // give me a new validator each time.
  },
  methods: {
    toggleVisible() {
      var that = this;
      this.visible = false;
      setTimeout(function() {
        that.hide();
      }, 300);
    },
    submitForm(event) {
      this.isLoading = true;
      var form = event.target;
      var data = new FormData(form);
      data = data.entries();
      var obj = data.next();
      var retrieved = {};

      while (undefined !== obj.value) {
        retrieved[obj.value[0]] = obj.value[1];
        obj = data.next();
      }
      this.$validator.validateAll().then(result => {
        if (!result) {
          this.isLoading = false;
          return;
        }
        if (!this.errors.any()) {
          // do auth request here
        }
      });
    }
  }
};
</script>
<style>
.login-box-input-item {
  padding: 0px 0px;
  margin-top: 10px;
  position: relative;
}

.login-box-input-item input {
  width: 100%;
  background: #fff;
  border-radius: 3px;
  font-size: 13pt;
  padding: 10px;
  padding-left: 55px;
  border: none;
  outline: none;
  border: solid 1px #eaeaea;
}
.login-box-input-icon {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13pt;
  border-right: solid 1px #eaeaea;
  color: #323b41;
}
.login-panel-title {
  text-align: center;
  padding: 15px;
  font-size: 14pt;
  z-index: 1;
  position: relative;
  font-weight: bold;
}
.forgot-password {
  position: absolute;
  left: 50%;
  bottom: 10px;
  font-size: 9pt;
  color: #d0d0d0;
  -webkit-transform: translateY(-100%);
  transform: translateX(-50%);
  display: inline-block;
}
.login-form {
  width: 100%;
  padding: 45px 15px;
  background: #f8fafb;
  box-shadow: 1px 1px 2px 0px #f0f0fa;
  border-radius: 3px;
  border: solid 1px #eaeaea;
  text-align: center;
  overflow: hidden;
  position: relative;
}
</style>
