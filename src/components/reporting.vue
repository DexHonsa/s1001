<template>
    <div>
        <Header />
       
        <div class="main-container container">
            <Sidebar activePage="reporting" />

            <div class="content-panels animated-med fadeInUp">
              <div class="content-panel">
                <div class="iot-date-picker">
                  <div class="content-panel-inner">
                    
                    <div class="input-row">
                      <div style="display:flex; align-items:center; margin-right:15px;">
                          <StandardSelect
                            width="200px"
                            :value="{label:'Monthly',value:'Monthly'}"
                            :options="[{label:'Monthly',value:'Monthly'},{label:'Yearly',value:'Yearly'},{label:'Custom',value:'Custom'}]"
                           />
                        </div>
                      <div style="display:flex; align-items:center;">
                      From:&nbsp; <div class="standard-input-item" style="width: 250px">                              
                                  <datepicker :value="toDate" @selected="selectedFrom" :disabled="disabled" :highlighted="highlighted" id="project_start_date" name="project_start_date" input-class="standard-input  date-input icon"></datepicker>
                                <div class="standard-input-icon"><i class="fa fa-calendar" /></div>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center;margin-left:15px;">
                      To:&nbsp; <div class="standard-input-item" style="width: 250px;">                              
                                  <datepicker :value="toDate" @selected="selectedTo" :disabled="disabled" :highlighted="highlighted"  id="project_start_date" name="project_start_date" input-class="standard-input  date-input icon"></datepicker>
                                <div class="standard-input-icon"><i class="fa fa-calendar" /></div>
                            </div>
                        </div>
                        
                        
                    </div>
                   
                  </div>

                </div>
                
                
                  <div class="reporting-section">
                    <div class="reporting-section-top">
                        <Checkbox
                        name="dashboard"
                        :checked="true"
                        value="dashboard"
                      />
                      <div class="reporting-section-title">Dashboard</div>
                    </div>
                    <div class="reporting-section-options">
                      <div class="reporting-section-option">
                        <Checkbox
                          name="dashboard"
                          :checked="true"
                          value="dashboard"
                        />
                        Dashboard
                      </div>
                    </div>
                  </div>

                  <div class="reporting-section">
                    <div class="reporting-section-top">
                        <Checkbox
                        name="financial"
                        :checked="true"
                      />
                      <div class="reporting-section-title">Financial</div>
                    </div>
                    <div class="reporting-section-options">
                      <div class="reporting-section-option">
                        <Checkbox
                          name="financial"
                          :checked="true"
                          value="actuals"
                        />
                        Actuals
                      </div>
                      <div class="reporting-section-option">
                        <Checkbox
                          name="financial"
                          :checked="true"
                          value="modified"
                        />
                        Modified
                      </div>
                    </div>
                  </div>

                  <div class="reporting-section">
                    <div class="reporting-section-top">
                        <Checkbox
                        name="leasing"
                        :checked="true"
                      />
                      <div class="reporting-section-title">Leasing</div>
                    </div>
                    <div class="reporting-section-options">
                      <div class="reporting-section-option">
                        <Checkbox
                          name="leasing"
                          :checked="true"
                          value="rent_roll_actual"
                        />
                        Rent Roll Actual
                      </div>
                      <div class="reporting-section-option">
                        <Checkbox
                          name="leasing"
                          :checked="true"
                          value="rent_roll_modified"
                        />
                        Rent Roll Modified
                      </div>
                    </div>
                  </div>

                  <div class="reporting-section">
                    <div class="reporting-section-top">
                        <Checkbox
                        name="leasing"
                        :checked="true"
                      />
                      <div class="reporting-section-title">Data Sources</div>
                    </div>
                    <div class="reporting-section-options">
                      <div class="reporting-section-option">
                        <Checkbox
                          name="leasing"
                          :checked="true"
                          value="rent_roll_actual"
                        />
                        Work Order
                      </div>
                      <div class="reporting-section-option">
                        <Checkbox
                          name="leasing"
                          :checked="true"
                          value="rent_roll_modified"
                        />
                        IOT
                      </div>
                      <div class="reporting-section-option">
                        <Checkbox
                          name="leasing"
                          :checked="true"
                          value="rent_roll_modified"
                        />
                        Third Party
                      </div>
                    </div>
                  </div>

                  <div class="reporting-section">
                    <div class="reporting-section-top">
                        <Checkbox
                        name="financial_impact"
                        :checked="true"
                      />
                      <div class="reporting-section-title">Financial Impact</div>
                    </div>
                    <div class="reporting-section-options">
                      <div class="reporting-section-option">
                        <Checkbox
                          name="financial_impact"
                          :checked="true"
                          value="financial_impact"
                        />
                        Financial Impact
                      </div>
                      
                    </div>
                  </div>
                  <div class="content-panel-top">
                  <div class="content-panel-top-options">
                    <div @click="toggleFinancialPopup" class="modal-btn confirm">Download PDF</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./header";
import Sidebar from "./sidebar";
import Checkbox from "./form_elements/checkbox";
import StandardSelect from "./form_elements/custom_select";
import Datepicker from "vuejs-datepicker";

export default {
  name: "financial",
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar,
    Checkbox,
    Datepicker,
    StandardSelect
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style>
.reporting-section {
  margin: 15px;
  border: solid 2px #e3e8ee;
  border-radius: 14px;
  user-select: none;
}
.reporting-section-top {
  display: flex;
  border-bottom: solid 1px #e3e8ee;
  align-items: center;
  padding: 15px;
  font-size: 15pt;
  color: #000;
}
.reporting-section-options {
  display: flex;
  align-items: center;
  padding: 50px 55px;
}
.reporting-section-option {
  display: flex;
  align-items: center;
  min-width: 200px;
  max-width: 250px;
}
</style>
