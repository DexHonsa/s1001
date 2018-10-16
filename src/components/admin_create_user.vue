<template lang="html">
  <div class="overlay animated-fast " :class="{'fadeIn':visible,'fadeOut':!visible}" >
    <div class="modal-1 animated-fast " :class="{'zoomIn':visible,'zoomOut':!visible}" style="max-width: 700px">
      <div class="modal-top">
        <div class="modal-title">Create User</div>
      </div>
      <form  @submit.prevent="submitForm">
        <div class="modal-inner">
          
            <div class="input-row">
              <StandardInput
                name="name"
                width="40%"
                field="User Name"
              />
              <StandardInput
                name="designation"
                width="40%"
                field="Designation"
              />
            </div>
            <div class="input-row">
              <StandardInput
                name="email"
                width="40%"
                field="Email"
              />
              <StandardInput
                name="company"
                width="40%"
                field="Company"
              />
            </div>
            <div class="input-row">
              <StandardSelect 
                field="Role"
                width="250px"
                name="role"
                :options="[{label:'Site1001 User', value:'site1001_user'}]"
                :value="{label:'Site1001 User', value:'site1001_user'}"
               />
            </div>
            <div class="modal-sub-inner">
              <div class="modal-sub-title">Property Access</div>
              <div class="check-items">
                <div class="check-item">
                    <Checkbox
                    name="leasing"
                    :checked="true"
                  />
                  Country Square
                </div>
                <div class="check-item">
                    <Checkbox
                    name="leasing"
                    :checked="true"
                  />
                  Swansgate Shopping Centre
                </div>
                <div class="check-item">
                    <Checkbox
                    name="leasing"
                    :checked="true"
                  />
                  Haymarket
                </div>
                <div class="check-item">
                    <Checkbox
                    name="leasing"
                    :checked="true"
                  />
                  Marina View
                </div>
                <div class="check-item">
                    <Checkbox
                    name="leasing"
                    :checked="true"
                  />
                 300 California
                </div>
                
              </div>
            </div>
            <div class="modal-btn-container">
                <div @click="toggleVisible" class="modal-btn cancel">Cancel</div>
                <div @click="toggleVisible" class="modal-btn confirm">Create User</div>
            
            </div>
            <div v-if="hasError" class="alert-danger animated fadeIn animate-fix" style="color:#ff0000; text-align:center; clear:both">{{errorMessage}}</div>
        </div>
    </form>
    </div>
    </div>
</template>
<script>
import StandardInput from "./form_elements/standard_input";
import StandardSelect from "./form_elements/custom_select";
import Checkbox from "./form_elements/checkbox";

export default {
  name: "login_form",
  props: ["hide", "login"],
  components: {
    StandardInput,
    StandardSelect,
    Checkbox
  },
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
      });
    }
  }
};
</script>
<style>
.check-items {
  display: flex;
  flex-wrap: wrap;
}
.check-item {
  flex-basis: 25%;
  flex: 1;
  display: flex;
  border-bottom: solid 1px #e3e8ee;
  align-items: center;
  user-select: none;
  padding: 15px;
  font-size: 10pt;
  color: #000;
  white-space: nowrap;
}
</style>

