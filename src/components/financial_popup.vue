<template lang="html">
  <div class="overlay animated-fast " :class="{'fadeIn':visible,'fadeOut':!visible}" >
    <div class="modal-1 animated-fast " :class="{'zoomIn':visible,'zoomOut':!visible}" style="width: 700px">
      <form  @submit.prevent="submitForm">
        <div class="modal-inner">
          <div class="download-link">Download Financial Template</div>
          <div class="modal-sub-inner">
            <div class="modal-sub-inner-title">Drag or Browse to Upload</div>
            <div class="browse-item" >
              
              <div class="standard-input-browse-btn">Browse</div>
            </div>
            <div style="display:flex; margin-top:15px;">
                <div class="modal-btn confirm" style="flex:1; margin-left:0;">Compare Asset Value</div>
                <div class="modal-btn confirm" style="flex:1;">Update Assumptions</div>          
            </div>
          </div>
            <div class="modal-btn-container">
                <div @click="toggleVisible" class="modal-btn cancel">Cancel</div>
                
            
            </div>
            <div v-if="hasError" class="alert-danger animated fadeIn animate-fix" style="color:#ff0000; text-align:center; clear:both">{{errorMessage}}</div>
        </div>
    </form>
    </div>
    </div>
</template>
<script>
import axios from "axios";

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
        }
      });
    }
  }
};
</script>
<style>
.standard-input-browse-btn {
  background: #f7fafc;
  height: 100%;
  border-left: solid 1px #e2eaec;
  padding: 0px 25px;
  margin-left: auto;
  display: flex;
  color: #000;
  align-items: center;
  font-size: 10pt;
  cursor: pointer;
}
.standard-input-browse-btn:hover {
  background: #eef2f5;
}

.browse-item {
  height: 35px;
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 3px;
  background: #fff;
  border: solid 1px #e2eaec;
}
.browse-item:hover {
  border-color: #d1dde0;
}
.download-link {
  text-align: right;
  font-size: 10pt;
  padding: 5px 0px;
}
.download-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>

