<template>
    <div>
        <Header />
        <FinancialPopup :hide="toggleFinancialPopup" v-if="financialPopup"/>
        <div class="main-container container">
            <Sidebar activePage="data_sources" activeSubPage="iot" />
            <div class="content-panels animated-med fadeInUp">
              
              <div class="content-panel-top" style="padding-right:0;">
                  <div class="content-panel-top-options">
                    <div @click="toggleFinancialPopup" class="download-link"><i class="fa fa-exclamation-triangle" style="margin-right:10px;"></i>As of September 05 2018</div>
                  </div>
              </div>
              <div class="content-panel" style="overflow:visible">
                <div class="gauges">
                  <div class="gauge-chart">
                    <div class="gauge-chart-title">Temperature</div>
                    <div id="gauge-chart-1"></div>
                  </div>
                  <div class="gauge-chart">
                    <div class="gauge-chart-title">RH</div>
                    <div id="gauge-chart-2"></div>
                  </div>
                  <div class="gauge-chart">
                    <div class="gauge-chart-title">CO2</div>
                    <div id="gauge-chart-3"></div>
                  </div>
                  <div class="gauge-chart">
                    <div class="gauge-chart-title">CO</div>
                    <div id="gauge-chart-4"></div>
                  </div>
                  <div class="gauge-chart">
                    <div class="gauge-chart-title">PM 2.5</div>
                    <div id="gauge-chart-5"></div>
                  </div>
                  <div class="gauge-chart">
                    <div class="gauge-chart-title">PM 10</div>
                    <div id="gauge-chart-6"></div>
                  </div>
                </div>
                <div class="iot-date-picker">
                  <div class="content-panel-inner">
                    <div class="modal-sub-inner">
                    <div class="input-row">
                      <div style="display:flex; align-items:center;">
                      From: <div class="standard-input-item" style="width: 250px">                              
                                  <datepicker :value="toDate" @selected="selectedFrom" :disabled="disabled" :highlighted="highlighted" id="project_start_date" name="project_start_date" input-class="standard-input  date-input icon"></datepicker>
                                <div class="standard-input-icon"><i class="fa fa-calendar" /></div>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center;">
                      To: <div class="standard-input-item" style="width: 250px">                              
                                  <datepicker :value="toDate" @selected="selectedTo" :disabled="disabled" :highlighted="highlighted"  id="project_start_date" name="project_start_date" input-class="standard-input  date-input icon"></datepicker>
                                <div class="standard-input-icon"><i class="fa fa-calendar" /></div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>

                </div>
              </div>
                <div class="content-panel">
                  <div class="content-panel-top">
                      <span>Work Orders</span>
                      <div class="content-panel-top-options"><i class="fa fa-angle-down"></i></div>
                  </div>
                  <div class="content-panel-inner">
                    <div class="chart-container">
                      <div class="chart">
                          <div id="bar-chart-2"></div>
                      </div>
                      <div class="chart">
                          <div id="bar-chart-3"></div>
                      </div>
                      <div class="chart">
                          <div id="bar-chart-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-panel">
                    <div class="content-panel-top blue" style="border-bottom:none;">
                        <span>Oct 10, 2018</span>
                        <div class="content-panel-top-options">
                            <div class="standard-input-item" style="max-width: 250px; color:#000">
                                <div class="datepicker-title">Compare Date: </div>
                                    
                                        <datepicker id="project_start_date" name="project_start_date" input-class="standard-input  date-input icon"></datepicker>
                                    <div class="standard-input-icon"><i class="fa fa-calendar" /></div>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div v-if="!isLoading" class="table-container">
                            <table class="project-view-table">
                                <tbody>
                                <tr>
                                    
                                    <th>Items <i class="fa fa-caret-up"></i></th>
                                    <th>Actual $</th>
                                    <th>Budget</th>
                                    <th>Variance</th>
                                    <th>Variance %</th>
                                    
                                </tr>
                                <tr>
                                    
                                    <td>Revenue</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>506,123</span></td>
                                    <td>430,434 <span>506,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Other Revenue</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Rental Income</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Operating Expenses</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Taxes And Insurance</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Maintenance And Repairs</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr class="split">
                                    <td>Net Operating Income</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Non Operating Items</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Interest/Land Lease</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>First Mortgage Interest</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Capital Expenditures</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr>
                                    <td>Building Improvements</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                <tr class="split">
                                    <td>Financial Performance</td>
                                    <td>506,234 <span>506,123</span></td>
                                    <td>430,434 <span>406,123</span></td>
                                    <td>430,434 <span>236,123</span></td>
                                    <td><i class="fa fa-angle-up"></i>&nbsp; 70% <span>50%</span></td>
                                </tr>
                                </tbody>
                            </table>
                            
                            </div>
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
import FinancialPopup from "./financial_popup";
export default {
  name: "financial",
  data() {
    return {
      financialPopup: false,
      fromDate: "",
      toDate: new Date()
    };
  },
  components: {
    Header,
    Sidebar,
    Datepicker,
    FinancialPopup
  },
  mounted() {
    var data = [
      {
        x: ["Budget", "Last Year", "Actual"],
        y: [2000000, 1800000, 1600000],
        type: "bar",
        marker: {
          color: ["#2e71b890", "#2e71b890", "#2e71b8"]
        },
        width: [0.6, 0.6, 0.8],
        name: "NOI"
      },
      {
        x: ["Budget", "Last Year", "Actual"],
        y: [2000000, 1800000, 1600000],
        type: "bar",
        marker: {
          color: ["#2e71b890", "#2e71b890", "#2e71b8"]
        },
        width: [0.6, 0.6, 0.8],
        xaxis: "x2",
        name: "Revenue"
      },
      {
        x: ["Budget", "Last Year", "Actual"],
        y: [194000, 502000, 402000],
        type: "bar",
        marker: {
          color: ["#2e71b890", "#2e71b890", "#2e71b8"]
        },
        width: [0.6, 0.6, 0.8],
        xaxis: "x3",
        name: "Utilities"
      }
    ];

    var data2 = [
      {
        x: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        y: [
          3400,
          4500,
          2500,
          4300,
          2343,
          3434,
          1555,
          2434,
          5000,
          4332,
          2222,
          3455
        ],
        type: "bar",
        marker: {
          color: "#2e71b8"
        },

        name: "Asset Value"
      },
      {
        x: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        y: [0, 500, 1200, 1300, 1200, 1700, 2300, 2500, 3000, 4332, 4600, 5000],
        type: "scatter",
        marker: {
          color: "#e39f48"
        },
        name: "Reactive"
      },
      {
        x: ["Apr", "May", "Jun", "Aug"],
        y: [3400, 4500, 2500, 4300],
        type: "bar",
        marker: {
          color: "#3080e8"
        },

        name: "Preventative"
      }
    ];
    var gaugeLevel1 = 50;
    var gaugeLevel2 = 50;
    var gaugeLevel3 = 50;
    var gaugeLevel4 = 50;
    var gaugeLevel5 = 50;
    var gaugeLevel6 = 50;
    // Trig to calc meter point
    var degrees = 180 - gaugeLevel1,
      radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Path: may have to change to create a better triangle
    var mainPath = "M -.0 -0.045 L .0 0.025 L ",
      pathX = String(x),
      space = " ",
      pathY = String(y),
      pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);
    var gaugeData1 = [
      {
        type: "scatter",
        x: [0],
        y: [0],
        marker: { size: 13, color: "#000" },
        showlegend: false,
        name: "speed",
        text: gaugeLevel1,
        hoverinfo: ""
      },
      {
        values: [50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50],
        rotation: 90,
        textinfo: "none",
        marker: {
          colors: [
            "#1dd17d",
            "rgb(125, 224, 141)",
            "rgb(226, 236, 72)",
            "rgb(247, 167, 68)",
            "rgb(247, 117, 5)",
            "rgb(191, 21, 21)",
            "rgba(255, 255, 255, 0)"
          ]
        },
        labels: ["151-180", "121-150", "91-120", "61-90", "31-60", "0-30", ""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: false
      }
    ];
    var gaugeData2 = [
      {
        type: "scatter",
        x: [0],
        y: [0],
        marker: { size: 13, color: "#000" },
        showlegend: false,
        text: gaugeLevel1,
        hoverinfo: ""
      },
      {
        values: [50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50],
        rotation: 90,
        textinfo: "none",
        textposition: "outside",
        marker: {
          colors: [
            "#1dd17d",
            "rgb(125, 224, 141)",
            "rgb(226, 236, 72)",
            "rgb(247, 167, 68)",
            "rgb(247, 117, 5)",
            "rgb(191, 21, 21)",
            "rgba(255, 255, 255, 0)"
          ]
        },
        labels: [
          "0 - 16%",
          "17 - 33%",
          "34 - 50%",
          "51 - 67%",
          "68 - 84%",
          "85",
          "100"
        ],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: false
      }
    ];

    var gaugeLayout = {
      shapes: [
        {
          type: "path",
          path: path,
          fillcolor: "000",
          line: {
            color: "000"
          }
        }
      ],

      Speed: 0 - 100,
      height: 200,
      width: 150,
      annotations: [
        {
          xref: "paper",
          yref: "paper",
          x: 0.55,
          xanchor: "right",
          y: 0.97,
          yanchor: "bottom",

          font: {
            family: "Roboto"
          },
          showarrow: false
        }
      ],
      margin: {
        l: 15,
        r: 15,
        b: 15,
        t: 15,
        pad: 2
      },
      xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      },
      yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      }
    };

    var layoutBlue = {
      showlegend: false,
      titlefont: {
        size: 11,
        family: "Roboto"
      },
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      legend: {
        font: {
          size: 11,
          color: "#000",
          family: "Roboto"
        }
      },
      annotations: [
        {
          xref: "paper",
          yref: "paper",
          x: 0.17,
          xanchor: "right",
          y: 0.97,
          yanchor: "bottom",
          text: "NOI",
          font: {
            family: "Roboto"
          },
          showarrow: false
        },
        {
          xref: "paper",
          yref: "paper",
          x: 0.5,
          xanchor: "right",
          y: 0.97,
          yanchor: "bottom",
          text: "Revenue",
          showarrow: false
        },
        {
          xref: "paper",
          yref: "paper",
          x: 0.85,
          xanchor: "right",
          y: 0.97,
          yanchor: "bottom",
          text: "Utilties",
          showarrow: false
        }
      ],
      height: 300,
      margin: {
        l: 50,
        r: 10,
        b: 40,
        t: 25,
        pad: 2
      },
      font: {
        size: 13,
        color: "#000",
        family: "Roboto"
      },

      xaxis: {
        color: "#000",
        domain: [0, 0.3]
      },
      xaxis2: {
        color: "#000",
        domain: [0.33, 0.6]
      },
      xaxis3: {
        color: "#000",
        domain: [0.66, 1]
      },
      yaxis: {
        color: "#000",
        gridcolor: "#ffffff33"
      },
      aaxis: {
        color: "#000"
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

    var gaugeLayout1 = JSON.parse(JSON.stringify(gaugeLayout));
    var gaugeLayout2 = JSON.parse(JSON.stringify(gaugeLayout));
    var gaugeLayout3 = JSON.parse(JSON.stringify(gaugeLayout));
    var gaugeLayout4 = JSON.parse(JSON.stringify(gaugeLayout));
    var gaugeLayout5 = JSON.parse(JSON.stringify(gaugeLayout));
    var gaugeLayout6 = JSON.parse(JSON.stringify(gaugeLayout));

    gaugeLayout1.annotations[0].text = gaugeLevel1;
    gaugeLayout2.annotations[0].text = gaugeLevel2;
    gaugeLayout3.annotations[0].text = gaugeLevel3;
    gaugeLayout4.annotations[0].text = gaugeLevel4;
    gaugeLayout5.annotations[0].text = gaugeLevel5;
    gaugeLayout6.annotations[0].text = gaugeLevel6;

    // ---------------- BUILD GAUGE CHARTS ---------------------
    Plotly.newPlot("gauge-chart-1", gaugeData1, gaugeLayout1, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("gauge-chart-2", gaugeData1, gaugeLayout2, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("gauge-chart-3", gaugeData1, gaugeLayout3, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("gauge-chart-4", gaugeData1, gaugeLayout4, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("gauge-chart-5", gaugeData1, gaugeLayout5, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("gauge-chart-6", gaugeData1, gaugeLayout6, {
      responsive: true,
      displayModeBar: false
    });

    // Plotly.newPlot("bar-chart-1", data, layoutBlue, {
    //   responsive: true,
    //   displayModeBar: false
    // });

    // Plotly.newPlot("bar-chart-2", data2, workChart1, {
    //   responsive: true,
    //   displayModeBar: false
    // });
    // Plotly.newPlot("bar-chart-3", data2, workChart2, {
    //   responsive: true,
    //   displayModeBar: false
    // });
    // Plotly.newPlot("bar-chart-4", data2, workChart3, {
    //   responsive: true,
    //   displayModeBar: false
    // });
  },
  computed: {
    highlighted() {
      if(this.toDate == ''){
        return {
        from: this.fromDate,
        to: this.fromDate
      };
      }
      return {
        from: this.fromDate,
        to: this.toDate
      };
    },
    disabled(){
      return  {
      from: new Date()
    }
    }
  },
  methods: {
    selectedFrom(date) {
      this.fromDate = date;
    },
    selectedTo(date) {
      this.toDate = date;
    },
    toggleFinancialPopup() {
      this.financialPopup = !this.financialPopup;
    }
  }
}
</script>
<style>
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
.gauges {
  display: flex;
  height: 150px;
}
.gauge-chart-title {
  text-align: center;
}
.gauge-chart {
  max-width: 16.6666%;
  flex: 1;
  overflow: hidden;
  padding: 10px;
}

.g-green {
  background: #1dd17d;
}
.g-green {
  background: #46aa56;
}
.g-green {
  background: #63aa42;
}
.g-green {
  background: #9fd843;
}
.g-green {
  background: #d8d643;
}
.g-green {
  background: #d89243;
}
.g-green {
  background: #d84343;
}
</style>
