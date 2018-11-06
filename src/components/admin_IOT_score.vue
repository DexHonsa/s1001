<template lang="html">
  <div class="overlay animated-fast " :class="{'fadeIn':visible,'fadeOut':!visible}" >
    <div class="modal-1 animated-fast " :class="{'zoomIn':visible,'zoomOut':!visible}" style="max-width: 600px">
      <div class="modal-top">
        <div class="modal-title">IOT Score Setup</div>
        
      </div>
      <form  @submit.prevent="submitForm">
        <div class="modal-inner">
          
            <table class="project-view-table">
                                <tbody>
                                <tr>
                                    <th>IOT Parameters <i class="fa fa-caret-up"></i></th>
                                    <th>System Health</th>
                                    <th>Weightage</th>
                                    <th>NOI Impact(%)</th>
                                </tr>
                                <tr>
                                    <td>Air Quaility</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Thermal Quality</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Moisture</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Dusts & Pests</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Safety & Security</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Water Quality</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Noise</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Lighting</td>
                                    <td> Moderate</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Ventilation</td>
                                    <td> Good</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Water Leak Deduction</td>
                                    <td> Unhealthy</td>
                                    <td><input class="table-input" type="text"/></td>
                                    <td><input class="table-input" type="text"/></td>
                                </tr>
                                
                                </tbody>
                            </table>
            <div class="modal-btn-container">
                <div @click="toggleVisible" class="modal-btn cancel">Cancel</div>
                <div @click="toggleVisible" class="modal-btn confirm">Save</div>
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
.table-input {
  outline: none;
  padding: 5px;
  border: solid 1px #d4dee2;
  border-radius: 3px;
  width: 100px;
}
</style>

