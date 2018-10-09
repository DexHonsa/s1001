<template>
    <div>
        <Header />
        <LeasingPopup :hide="toggleLeasingPopup" v-if="leasingPopup"/>
        <div class="main-container container">
            <Sidebar activePage="leasing"/>
            <div class="content-panels animated-med fadeInUp">
                
                <div class="content-panel">
                  <div class="content-panel-top">
                      <span>Work Orders</span>
                      <div class="content-panel-top-options"><i class="fa fa-angle-down"></i></div>
                  </div>
                            <div class="content-panel-inner">
                              <div class="chart-container">
                                <div class="chart">
                                    <div id="bar-chart-1"></div>
                                </div>
                                <div class="chart">
                                    <div id="bar-chart-2"></div>
                                </div>
                                
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
                                  <div class="metric-title">Occupancy</div>
                                  <div class="metric-value">965,344 SF</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Biggest Lease by SF</div>
                                  <div class="metric-value">Best Buy (50,000SF)</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Average Lease Term</div>
                                  <div class="metric-value">9 Years 6 Months</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Upcoming Expiration</div>
                                  <div class="metric-value">Mar 2018</div>
                                </div>
                              </div>
                            </div>
                            
                </div>
                <div class="content-panel">
                    <div class="content-panel-top blue" style="border-bottom:none;">
                       <span><div @click="toggleLeasingPopup" class="modal-btn cancel">Edit Rent</div></span>
                        <div class="content-panel-top-options">
                            <div class="leasing-table-options">
                              <div class="leasing-table-option active">All(149)</div>
                              <div class="leasing-table-option">YTD New Leases (0)</div>
                              <div class="leasing-table-option">YTD Renewals (0)</div>
                              <div class="leasing-table-option">Vacant (47)</div>
                              <div class="leasing-table-option">Expirations (0)</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div v-if="!isLoading" class="table-container">
                            <table class="project-view-table">
                                <tbody>
                                <tr>
                                    
                                    <th>Property <i class="fa fa-caret-up"></i></th>
                                    <th>Tenant</th>
                                    <th>Suites</th>
                                    <th>SF</th>
                                    <th>Rent Start</th>
                                    <th>Rent End</th>
                                    <th>Type</th>
                                    <th>Monthly Amt</th>
                                    <th>Monthly PSF</th>
                                    <th>Period</th>
                                    <th>Monthly Amt</th>
                                </tr>
                                <tr>
                                    
                                    <td>150 El Camero</td>
                                    <td>Douglas Elliman<br><span>HD10754</span></td>
                                    <td>250</td>
                                    <td>10,434</td>
                                    <td>06/01/2015</td>
                                    <td>06/01/2016</td>
                                    <td>--</td>
                                    <td>107,506.00</td>
                                    <td>9.94</td>
                                    <td>06/01/2015<br>06/01/2015<br>06/01/2015<br>06/01/2015<br>06/01/2015</td>
                                    <td>107,506.00<br>107,506.00<br>107,506.00<br>107,506.00<br>107,506.00</td>

                                </tr>
                                <tr>
                                    
                                    <td>150 El Camero</td>
                                    <td>Douglas Elliman<br><span>HD10754</span></td>
                                    <td>250</td>
                                    <td>10,434</td>
                                    <td>06/01/2015</td>
                                    <td>06/01/2016</td>
                                    <td>--</td>
                                    <td>107,506.00</td>
                                    <td>9.94</td>
                                    <td>06/01/2015<br>06/01/2015<br>06/01/2015<br>06/01/2015<br>06/01/2015</td>
                                    <td>107,506.00<br>107,506.00<br>107,506.00<br>107,506.00<br>107,506.00</td>

                                </tr>
                                <tr>
                                    
                                    <td>150 El Camero</td>
                                    <td>Douglas Elliman<br><span>HD10754</span></td>
                                    <td>250</td>
                                    <td>10,434</td>
                                    <td>06/01/2015</td>
                                    <td>06/01/2016</td>
                                    <td>--</td>
                                    <td>107,506.00</td>
                                    <td>9.94</td>
                                    <td>06/01/2015<br>06/01/2015<br>06/01/2015<br>06/01/2015<br>06/01/2015</td>
                                    <td>107,506.00<br>107,506.00<br>107,506.00<br>107,506.00<br>107,506.00</td>

                                </tr>
                                
                                </tbody>
                            </table>
                            
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
import Datepicker from "vuejs-datepicker";
import LeasingPopup from "./leasing_popup";
export default {
  name: "financial",
  data() {
    return {
      leasingPopup: false
    };
  },
  components: {
    Header,
    Sidebar,
    Datepicker,
    LeasingPopup
  },
  mounted() {
    var data = [
      {
        x: [
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
          "2027"
        ],
        y: [45433, 46454, 37565, 48766, 38765, 29456, 20345, 51231, 52536],
        type: "bar",
        marker: {
          color: [
            "#24b47e",
            "#3297d3",
            "#e39f48",
            "#8f6ed5",
            "#24b47e",
            "#3297d3",
            "#e39f48",
            "#8f6ed5",
            "#3297d3"
          ]
        }
      },
      {
        x: [
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
          "2027"
        ],
        y: [42233, 43654, 41265, 43666, 44865, 43356, 41345, 50231, 51536],
        type: "scatter",
        marker: {
          color: "#e39f48"
        }
      }
    ];
    var data2 = [
      {
        labels: [
          "Kennedy Wilson",
          "Bento Box Entertainment",
          "Aspect Ratio",
          "Starcom Worldwide",
          "Entertainment One TV",
          "others"
        ],
        values: [20, 14, 23, 12, 12, 123],
        type: "pie",
        marker: {
          colors: [
            "#24b47e",
            "#3297d3",
            "#e39f48",
            "#8f6ed5",
            "#2e71b8",
            "#3297d3"
          ]
        }
      }
    ];

    var layoutBlue = {
      showlegend: false,
      titlefont: {
        size: 14,
        family: "Roboto",
        color: "#000"
      },
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      font: {
        size: 14,
        color: "#fff",
        family: "Roboto"
      },
      legend: {
        font: {
          size: 14,
          color: "#000",
          family: "Roboto"
        }
      },

      height: 300,
      margin: {
        l: 50,
        r: 10,
        b: 40,
        t: 25,
        pad: 2
      },

      xaxis: {
        color: "#000"
      },
      yaxis: {
        color: "#000",
        gridcolor: "#ffffff33"
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
    layoutGreen.annotations = [];
    layoutGreen.xaxis.domain = [0, 1];
    layoutGreen.showlegend = true;

    var leaseExpiration = JSON.parse(JSON.stringify(layoutGreen));
    var RentRoll = JSON.parse(JSON.stringify(layoutGreen));

    leaseExpiration.title = "Lease Expiration By Year";
    RentRoll.title = "Rent Roll - Top 5 Tenants";

    Plotly.newPlot("bar-chart-1", data, leaseExpiration, {
      responsive: true,
      displayModeBar: false
    });

    Plotly.newPlot("bar-chart-2", data2, RentRoll, {
      responsive: true,
      displayModeBar: false
    });
  },
  computed: {},
  methods: {
    toggleLeasingPopup() {
      this.leasingPopup = !this.leasingPopup;
    }
  }
};
</script>
<style scoped>
.project-view-table tr:first-child {
  height: 45px;
  /* background: #aebac7; */
}
.datepicker-title {
  font-size: 10pt;
  color: #aebac7;
}
.project-view-table tr td span {
  color: #aebac7;
  margin-left: 10px;
}
.split {
  background: #f7fafc !important;
  font-weight: bold;
}
.project-view-table tr td span {
  margin-left: 0;
}
.leasing-table-options {
  display: flex;
  font-size: 10pt;
  align-items: center;
  height: 35px;
  border-radius: 3px;
  background: #fff;
  color: #cbd6da;
  overflow: hidden;
  /* border: solid 1px #cdd0d4; */
}
.leasing-table-option {
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border-left: solid 1px #cdd0d4;
  cursor: pointer;
}
.leasing-table-option:hover {
  background: #f7fafc;
  color: #000;
}
.leasing-table-option.active {
  color: #000;
  background: #e3e8ee;
  font-weight: bold;
}
</style>
