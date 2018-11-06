<template lang="html">
  <div class="overlay animated-fast " :class="{'fadeIn':visible,'fadeOut':!visible}" >
    <IOTScore :hide="toggleIOTScore" v-if="IOTScore" />
    <ValuationEdit :hide="toggleValuationEdit" v-if="valuationEdit" />
    <div class="modal-1 animated-fast " :class="{'zoomIn':visible,'zoomOut':!visible}" style="max-width: 700px">
      <div class="modal-top">
        <div class="modal-title">Add Property</div>
        
      </div>
      <form  @submit.prevent="submitForm">
        <div class="modal-inner">
          
            <div class="input-row">
              <StandardInput
                name="name"
                width="250px"
                field="Property Name"
              />
              <StandardSelect 
                field="Property Type"
                width="150px"
                name="Property Type"
                :options="[{label:'Office', value:'Office'}]"
                :value="{label:'Office', value:'Office'}"
               />
            </div>
            <div class="input-row">
              <StandardSelect 
                field="Account Manager"
                width="150px"
                name="Account Manager"
                :options="[{label:'John', value:'John'}]"
                :value="{label:'John', value:'John'}"
               />
              <StandardSelect 
                field="Currency"
                width="100px"
                name="Currency"
                :options="[{label:'USD', value:'USD'}]"
                :value="{label:'USD', value:'USD'}"
               />
            </div>
            <div class="input-row">
              <StandardSelect 
                field="FY Start"
                width="150px"
                name="FY Start"
                :options="[{label:'Jan', value:'Jan'}]"
                :value="{label:'Jan', value:'Jan'}"
               />
               <StandardSelect 
                field="FY End"
                width="150px"
                name="FY End"
                :options="[{label:'Jan', value:'Jan'}]"
                :value="{label:'Jan', value:'Jan'}"
               />
            </div>
            <div class="modal-sub-inner">
             
              <div class="input-row">
              <StandardInput
                field="Street Address"
                width="450px"
                name="Address"
               />
               
            </div>
            <div class="input-row">
              <StandardInput
                field="City"
                width="250px"
                name="City"
               />
               <StandardInput
                field="State"
                width="80px"
                name="City"
               />
               <StandardInput
                field="Zip"
                width="100px"
                name="City"
               />
               <StandardSelect 
                field="Country"
                width="250px"
                name="Country"
                :options="[{label:'United States', value:'United States'}]"
                :value="{label:'United States', value:'United States'}"
               />
               
            </div>
            </div>
            <div class="input-row">
              <button @click="toggleValuationEdit" class="modal-btn confirm">Valuation Edit</button>
              <button @click="toggleIOTScore" class="modal-btn confirm">IOT Score</button>
            </div>
            <div class="modal-btn-container">
                <div @click="toggleVisible" class="modal-btn cancel">Cancel</div>
                <div @click="toggleVisible" class="modal-btn confirm">Add Property</div>
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
import ValuationEdit from "./admin_valuation_edit";
import IOTScore from "./admin_IOT_score";

export default {
  name: "login_form",
  props: ["hide", "login"],
  components: {
    StandardInput,
    StandardSelect,
    Checkbox,
    ValuationEdit,
    IOTScore
  },
  data() {
    return {
      visible: true,
      hasError: false,
      isLoading: false,
      errorMessage: "",
      valuationEdit: false,
      IOTScore: false
    };
  },
  $_veeValidate: {
    validator: "new" // give me a new validator each time.
  },
  methods: {
    toggleValuationEdit() {
      this.valuationEdit = !this.valuationEdit;
    },
    toggleIOTScore() {
      this.IOTScore = !this.IOTScore;
    },
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

