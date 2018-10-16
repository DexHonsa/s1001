<template>
    <div>
        <Header />
        <FinancialPopup :hide="toggleFinancialPopup" v-if="financialPopup"/>
        <div class="main-container container">
            <Sidebar activePage="data_sources" activeSubPage="third_party" />
            <div class="content-panels animated-med fadeInUp">
               <div class="content-panel">
                  <div class="content-panel-top">
                      
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
                              <div class="chart-container">
                                <div class="chart">
                                    <div id="bar-chart-3"></div>
                                </div>
                                
                                
                                
                              </div>
                               <div class="chart-container">
                                 <div class="chart">
                                    <div id="bar-chart-5"></div>
                                </div>
                                <div class="chart">
                                    <div id="bar-chart-4"></div>
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
import StandardSelect from "./form_elements/custom_select";
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
    FinancialPopup,
    StandardSelect
  },
  mounted() {
    var barData = [
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
    var pieData = [
      {
        labels: ["Property Insurance", "Liability", "Workers Compensation"],
        values: [20, 14, 23],
        type: "pie",
        marker: {
          colors: ["#3297d3", "#e39f48", "#8f6ed5"]
        }
      }
    ];
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

    // ------------ BAR CHARRTS --------------------
    var chart1 = JSON.parse(JSON.stringify(layoutGreen));
    var chart2 = JSON.parse(JSON.stringify(layoutGreen));
    var chart3 = JSON.parse(JSON.stringify(layoutGreen));
    var chart4 = JSON.parse(JSON.stringify(layoutGreen));

    chart1.title = "Trend - EB Changes";
    chart2.title = "Trend - Gas Changes Changes";
    chart3.title = "Trend - Water & Sewer Changes";
    chart4.title = "Premium Trend";

    Plotly.newPlot("bar-chart-1", barData, chart1, {
      responsive: true,
      displayModeBar: false
    });

    Plotly.newPlot("bar-chart-2", barData, chart2, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-3", barData, chart3, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-4", barData, chart4, {
      responsive: true,
      displayModeBar: false
    });

    // ------------ PIE CHART --------------------
    var chart5 = JSON.parse(JSON.stringify(layoutGreen));
    chart5.title = "Trend - Water & Sewer Changes";

    Plotly.newPlot("bar-chart-5", pieData, chart5, {
      responsive: true,
      displayModeBar: false
    });
  },
  computed: {
    highlighted() {
      if (this.toDate == "") {
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
    disabled() {
      return {
        from: new Date()
      };
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
};
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
