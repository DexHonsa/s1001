<template lang="html">
  <div class="overlay animated-fast " :class="{'fadeIn':visible,'fadeOut':!visible}" >
    <div class="modal-1 animated-fast " :class="{'zoomIn':visible,'zoomOut':!visible}" style="max-width: 700px; overflow:visible">
      <form  @submit.prevent="submitForm">
        <div class="modal-inner">
          <div class="modal-sub-inner">
          <div class="input-row">
            <StandardSelect
            field="Select Property"
            :options="[{label:'105 El Centro',value:'105 El Centro'},{label:'Less Than',value:'between'},{label:'Greater Than',value:'between'}]"
            :value="{label:'105 El Centro',value:'105 El Centro'}"
            width="250px"
           />
           <StandardSelect
            field="Select Tenant"
            :options="[{label:'105 El Centro',value:'105 El Centro'},{label:'Less Than',value:'between'},{label:'Greater Than',value:'between'}]"
            :value="{label:'105 El Centro',value:'105 El Centro'}"
            width="250px"
           />
          </div>
          <div class="input-row">
            <StandardInput 
              name="name1"
              width="200px"
            />
            <StandardSelect
            feild=""
            :options="[{label:'Between',value:'between'},{label:'Less Than',value:'between'},{label:'Greater Than',value:'between'}]"
            :value="{label:'Between',value:'between'}"
            width="150px"
           />
           <StandardInput 
              name="name1"
              width="100px"
            />
            <StandardSelect
            feild=""
            :options="[{label:'And',value:'and'},{label:'Or',value:'or'}]"
            :value="{label:'And',value:'and'}"
            width="90px"
           />
           <StandardInput 
              name="name1"
              width="100px"
            />
          </div>
          </div>
          
            <div class="modal-btn-container">
                <div @click="toggleVisible" class="modal-btn cancel">Cancel</div>
                <div @click="toggleVisible" class="modal-btn confirm">Submit</div>
            </div>
            <div v-if="hasError" class="alert-danger animated fadeIn animate-fix" style="color:#ff0000; text-align:center; clear:both">{{errorMessage}}</div>
        </div>
    </form>
    </div>
    </div>
</template>
<script>
import axios from "axios";
import StandardInput from "./form_elements/standard_input";
import StandardSelect from "./form_elements/custom_select";

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
  components: {
    StandardInput,
    StandardSelect
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

