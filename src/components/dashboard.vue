<template>
    <div>
        <div style="overflow:visible">
            
                <Header />
                <div class="main-container container">
                    <Sidebar activePage="dashboard" />
                    <div class="content-panels animated-med fadeInUp">
                        <div class="content-panel blue">
                            <div class="content-panel-top">
                                <div class="top-dropdown" >
                                    <span @click="toggleChartDropdown()">BMS <i class="fa fa-angle-down"></i></span>
                                    <div v-if="chartDropdown" class="dropdown-panel animated-fast zoomIn2" style="left:0; right:unset">
                                        <div class="dropdown-option">Option 1</div>
                                        <div class="dropdown-option">Option 2</div>
                                    </div>
                                </div>
                                <div class="content-panel-top-options"><i class="fa fa-angle-down"></i></div>
                            </div>
                            <div class="chart-container">
                                <div class="chart">
                                    <div id="bar-chart-1"></div>
                                </div>
                                <div class="chart">
                                    <div id="bar-chart-2"></div>
                                </div>
                                <div class="chart">
                                    <div id="bar-chart-3"></div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="content-panel">
                            <div class="content-panel-top">
                                <span>Metrics</span>
                                <div class="content-panel-top-options"><i class="fa fa-angle-down"></i></div>
                            </div>
                            <div class="content-panel-inner">
                              <div class="metric-container">
                                <div class="metric-item">
                                  <div class="metric-title">NOI</div>
                                  <div class="metric-value">$565,344</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Asset Value</div>
                                  <div class="metric-value">$1,565,344</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Repair and Maintenance</div>
                                  <div class="metric-value">$565,344</div>
                                </div>
                              </div>
                            </div>
                            
                        </div>

                         <div class="content-panel">
                            <div class="content-panel-top">
                                <span>Building Health Key Metrics</span>
                                <div class="content-panel-top-options"><i class="fa fa-angle-down"></i></div>
                            </div>
                            <div class="content-panel-inner">
                              <div class="metric-container">
                                <div class="health-item">
                                  <div class="health-title">Air Quality</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div class="health-item">
                                  <div class="health-title">Safety Security Level</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div class="health-item">
                                  <div class="health-title">Thermal Level</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div class="health-item">
                                  <div class="health-title">Water Quality</div>
                                  <div class="health-value average">Average</div>
                                </div>
                                <div @click="toggleHealth(5)" class="health-item" :class="{'active': activeHealth == 5}">
                                  <div v-if="activeHealth == 5" class="active-health-panel animated-fast fadeInUp">
                                    <i class="fa fa-exclamation-triangle"></i> Your Moisture Level is poor. <div style="margin-left:auto" class="basic-btn danger">Get Help</div>
                                  </div>
                                  <div class="health-title">Moisture Level</div>
                                  <div class="health-value poor"><i class="fa fa-exclamation-triangle"></i> Poor</div>
                                  
                                </div>
                                
                                <div class="health-item">
                                  <div class="health-title">Noise Level</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div class="health-item">
                                  <div class="health-title">Dust Level</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div class="health-item">
                                  <div class="health-title">Lighting Quality</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div class="health-item">
                                  <div class="health-title">Water Level</div>
                                  <div class="health-value good">Good</div>
                                </div>
                                <div @click="toggleHealth(10)" class="health-item" :class="{'active': activeHealth == 10}">
                                  <div v-if="activeHealth == 10" class="active-health-panel animated-fast fadeInUp">
                                    <i class="fa fa-exclamation-triangle"></i> Your Ventilation Quality is poor. <div style="margin-left:auto" class="basic-btn danger">Get Help</div>
                                  </div>
                                  <div class="health-title">Ventilation Quality</div>
                                  <div class="health-value poor"><i class="fa fa-exclamation-triangle"></i> Poor</div>
                                  
                                </div>
                              </div>
                            </div>
                            
                        </div>

                        <div class="content-panel green">
                            <div class="content-panel-top">
                                <span>Third Party Data Matrix</span>
                                <div class="content-panel-top-options"><i class="fa fa-angle-down"></i></div>
                            </div>
                            <div class="content-panel-inner">
                              <div class="chart-container">
                                <div class="chart">
                                    <div id="bar-chart-4"></div>
                                </div>
                                <div class="chart">
                                    <div id="bar-chart-5"></div>
                                </div>
                                <div class="chart">
                                    <div id="bar-chart-6"></div>
                                </div>
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
</template>
<script>
import StandardInputIcon from "./form_elements/standard_input_icon";
import Datepicker from "vuejs-datepicker";
import Header from "./header";
import Sidebar from "./sidebar";
export default {
  name: "dashboard",
  data() {
    return {
      chartDropdown: false,
      activeHealth: 0
    };
  },
  methods: {
    toggleHealth(id) {
      console.log(id);
      if (this.activeHealth == 0) {
        this.activeHealth = id;
      } else {
        this.activeHealth = 0;
      }
    },
    toggleChartDropdown() {
      this.chartDropdown = !this.chartDropdown;
    }
  },
  computed: {},
  mounted() {
    var data = [
      {
        x: ["Reactive", "Preventative"],
        y: [110, 24],
        type: "bar",
        marker: {
          color: "#fff"
        }
      }
    ];
    var data2 = [
      {
        labels: ["Assigned", "Completed", "In-Progress", "Pending"],
        values: [20, 14, 23, 12],
        type: "pie",
        marker: {
          colors: ["#7cb4fd", "#405e85", "#a9cbf6", "#405eff"]
        }
      }
    ];
    var data3 = [
      {
        x: ["30 days", "60 days", "90 days"],
        y: [20, 14, 23],
        type: "bar",
        marker: {
          color: "#fff"
        }
      }
    ];
    var data4 = [
      {
        x: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"],
        y: [20, 14, 23, 12, 15, 16],
        type: "bar",
        marker: {
          color: "#fff"
        }
      }
    ];
    var data5 = [
      {
        x: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"],
        y: [20, 14, 23, 12, 15, 16],
        type: "bar",
        marker: {
          color: "#fff"
        }
      }
    ];
    var data6 = [
      {
        x: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"],
        y: [20, 14, 23, 12, 15, 16],
        type: "bar",
        marker: {
          color: "#fff"
        }
      }
    ];

    var layoutBlue = {
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      height: 300,
      margin: {
        l: 50,
        r: 10,
        b: 40,
        t: 10,
        pad: 4
      },
      font: {
        family: "Arial",
        size: 14,
        color: "rgba(245,246,249,1)"
      },

      xaxis: {
        color: "#fff"
      },
      yaxis: {
        color: "#fff",
        gridcolor: "#ffffff33"
      },
      aaxis: {
        color: "#fff"
      },
      hovermode: "closest",
      hoverlabel: {
        bordercolor: "transparent",
        bgcolor: "#000000aa",
        font: {
          color: "#fff"
        }
      }
    };

    var layoutGreen = JSON.parse(JSON.stringify(layoutBlue));
    layoutGreen.paper_bgcolor = "transparent";
    layoutGreen.plot_bgcolor = "transparent";

    Plotly.newPlot("bar-chart-1", data, layoutBlue, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-2", data2, layoutBlue, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-3", data3, layoutBlue, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-4", data4, layoutGreen, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-5", data5, layoutGreen, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-6", data6, layoutGreen, {
      responsive: true,
      displayModeBar: false
    });
  },
  components: {
    StandardInputIcon,
    Datepicker,
    Header,
    Sidebar
  }
};
</script>
<style>
.dropdown-title {
  font-size: 9pt;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 10px;
  color: #afb7c4;
}
.basic-btn {
  display: flex;
  align-items: center;
  height: 35px;
  justify-content: center;
  padding: 0px 15px;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;
}
.basic-btn.danger {
  background: #b51313;
  color: #fff;
}
.basic-btn:hover {
  background: #7a0c0c;
}
.active-health-panel {
  position: absolute;
  top: calc(-200% - 15px);
  display: flex;
  align-items: center;

  padding: 15px;
  border-radius: 5px;
  width: 100%;
  background: #f3c5c5;
  color: #b51313;
  box-shadow: 1px 14px 34px -5px rgba(0, 0, 0, 0.3);
}
.content-panel-inner {
  padding: 15px;
}
.health-item {
  cursor: pointer;
  flex-basis: calc(50% - 10px);
  display: flex;
  align-items: center;
  height: 35px;
  position: relative;
  margin: 5px;
  background: #f7fafc;
  border-radius: 3px;
  border: solid 1px #eaeaea;
}
.health-item.active {
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  /* transform: scale(1.05, 1.05); */
  background: #fff;
  box-shadow: 1px 1px 12px -3px rgba(0, 0, 0, 0.4);
}
.health-title {
  padding: 0px 15px;
  overflow: visible;
}
.health-value.good {
  background: #3080e8;
  border-color: #3080e8;
  color: #fff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.health-value.average {
  background: #405e85;
  border-color: #405e85;
  color: #fff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.health-value.poor i {
  margin-right: 10px;
}
.health-value.poor {
  background: #f3c5c5;
  border-color: #f3c5c5;
  margin-top: 0px;
  color: #b51313;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.health-value {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 100px;
  font-size: 10pt;
  margin-right: -1px;
  color: #000;
  border: solid 1px #3080e8;
  height: calc(100% + 2px);
}
.metric-container {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.metric-item {
  align-items: center;
  flex: 1;
  padding: 15px;
}
.metric-title {
  font-size: 12pt;
  font-weight: 300;
}
.metric-value {
  font-size: 25pt;
  color: #000;
  margin-top: 15px;
}
.top-dropdown {
  position: relative;
  cursor: pointer;
}
.content-panel.pink {
  background: linear-gradient(135deg, #f7ca78 1%, #ff597d 100%);
  color: #fff;
}
.content-panel.bluepink {
  background: linear-gradient(135deg, #3080e8 1%, #ff597d 100%);
  color: #fff;
}
.content-panel.blue {
  background: linear-gradient(135deg, #3080e8 1%, #7db9e8 100%);
  color: #fff;
}
.content-panel.green {
  background: linear-gradient(135deg, #1cceae 0%, #7db9e8 100%);
  color: #fff;
}
.content-panel:last-of-type {
  margin-bottom: 150px;
}
.chart {
  flex: 1;
  min-width: 33.3%;
}
.chart-container {
  display: flex;
}
.content-panel.blue .content-panel-top,
.content-panel.green .content-panel-top {
  border-bottom: none;
}
.content-panel-top-options {
  margin-left: auto;
  font-size: 12pt;
}
.content-panel-top {
  font-size: 15pt;
  font-weight: 400;
}
.content-panel-top {
  padding: 15px;
  border-bottom: solid 1px #e3e8ee;
  display: flex;
  align-items: center;
}
.main-container {
  display: flex;
}
.content-panel {
  box-shadow: var(--shadow);
  background: #fff;
  border-radius: 5px;
  min-height: 100px;
  margin-bottom: 10px;
  overflow: hidden;
}
.content-panels {
  max-width: 100%;
  flex: 1;
}
.left-sidebar {
  width: 250px;
  padding-left: 15px;
}
.sidebar-option {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #aab7c4;
  padding: 5px 0px;
}
.sidebar-option.active {
  color: #2b2d50;
}
.sidebar-option.active img {
  filter: saturate(1);
}
.sidebar-option:hover {
  color: #2b2d50;
}
.sidebar-option:hover img {
  filter: saturate(1);
}
.sidebar-option img {
  margin-right: 10px;
  width: 20px;
  filter: saturate(0.3);
}
.top-bar {
  height: 70px;
  overflow: visible;
}
.top-bar-inner {
  display: flex;
  align-items: center;
}

.logo {
  height: 70px;
}
.logo img {
  height: 100%;
  padding: 21px 0px;
}
.left-options {
  margin-left: auto;
}
.profile-option {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #aab7c4;
  font-size: 17pt;
  border-radius: 100px;
  box-shadow: var(--shadow);
  cursor: pointer;
  position: relative;
}
.dropdown-panel {
  background: #fff;
  color: var(--mainText);
  position: absolute;
  box-shadow: var(--shadow);
  border-radius: 3px;
  top: calc(100% + 10px);
  right: 0;
  overflow: hidden;
  z-index: 10000;
}
.dropdown-panel .dropdown-option {
  user-select: none;
  padding: 10px;
  font-size: 11pt;
  min-width: 150px;
  cursor: pointer;
}
.dropdown-panel .dropdown-option:hover {
  background: #f7fafc;
}
.left-options {
  display: flex;
  align-items: center;
}
.menu-search {
  margin-right: 10px;
}
</style>
