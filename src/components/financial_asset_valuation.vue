<template>
    <div>
        <Header />
        <div class="main-container container">
            <Sidebar activePage="financial" activeSubPage="asset_valuation" />
            <div class="content-panels animated-med fadeInUp">
                <div class="content-panel blue">
                    <div class="content-panel-inner" style="display:flex;">
                            <div class="chart-container" style="width:33.333%">
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
                                  <div class="metric-title">Net Present Value</div>
                                  <div class="metric-value">$565,344</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Direct Cap Value</div>
                                  <div class="metric-value">$1,565,344</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">Internal Rate Of Return</div>
                                  <div class="metric-value">$565,344</div>
                                </div>
                                <div class="metric-item">
                                  <div class="metric-title">NOI Compounded Annual Growth Rate</div>
                                  <div class="metric-value">3.32%</div>
                                </div>
                              </div>
                            </div>
                            
                </div>
                <div class="content-panel">
                   
                    <div>
                        <div v-if="!isLoading" class="table-container">
                            <table class="project-view-table">
                                <tbody>
                                <tr>
                                    <th>Items <i class="fa fa-caret-up"></i></th>
                                    <th>Year 1</th>
                                    <th>Year 2</th>
                                    <th>Year 3</th>
                                    <th>Year 4</th>
                                    <th>Year 5</th>
                                    <th>Year 6</th>
                                    <th>Year 7</th>
                                    <th>Year 8</th>
                                    <th>Year 9</th>
                                    <th>Year 10</th>
                                </tr>
                                <tr>
                                    <td>Revenue</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr>
                                    <td>Operating Expenses</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr>
                                    <td>Non Operating Expenses</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr>
                                    <td>Capital Expenditures</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr class="split">
                                    <td colspan="11">Inflation&nbsp; <i class="fa fa-angle-down"></i></td>
                                </tr>
                                <tr>
                                    <td>Revenue Inflation</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr>
                                    <td>Expense Inflation</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr>
                                    <td>Capital Inflation</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr class="split"><td colspan="11"></td></tr>
                                <tr>
                                    <td>Net Operating Income</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr class="split"><td colspan="11"></td></tr>
                                <tr>
                                    <td>Net Income</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                </tr>
                                <tr class="split"><td colspan="11"></td></tr>
                                <tr>
                                    <td>Cap Rate</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>506,234</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
                                    <td>430,434</td>
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
export default {
  name: "financial_asset_valuation",
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar,
    Datepicker
  },
  mounted() {
    var data = [
      {
        x: ["Original NPV"],
        y: [45432],
        type: "bar",
        marker: {
          color: ["#ffffff50"]
        },
        width: [0.6, 0.6, 0.8],
        name: "Original NPV"
      },
      {
        x: ["Updated NPV"],
        y: [34323],
        type: "bar",
        marker: {
          color: ["#fff"]
        },
        width: [0.6],
        name: "Updated NPV"
      }
    ];

    var data2 = [
      {
        x: ["Original IRR"],
        y: [0.3],
        type: "bar",
        marker: {
          color: "#ffffff50"
        },
        width: 0.6,
        name: "Original IRR"
      },
      {
        x: ["Updated IRR"],
        y: [0.2345],
        type: "bar",
        marker: {
          color: "#fff"
        },
        width: 0.6,
        name: "Updated IRR"
      }
    ];

    var data3 = [
      {
        x: [
          "Year 1",
          "Year 2",
          "Year 3",
          "Year 4",
          "Year 5",
          "Year 6",
          "Year 7",
          "Year 8",
          "Year 9",
          "Year 10"
        ],
        y: [1233, 1344, 1455, 1556, 1765, 1898, 1932, 2032, 2114, 2234],
        type: "scatter",
        marker: {
          color: "#aaffaf"
        },
        width: 0.6,
        name: "Revenue"
      },
      {
        x: [
          "Year 1",
          "Year 2",
          "Year 3",
          "Year 4",
          "Year 5",
          "Year 6",
          "Year 7",
          "Year 8",
          "Year 9",
          "Year 10"
        ],
        y: [1433, 1644, 1755, 1956, 2165, 2498, 2532, 2632, 2814, 3234],
        type: "scatter",
        marker: {
          color: "#f8fafc90"
        },
        width: 0.6,
        name: "Operating Expenses"
      },
      {
        x: [
          "Year 1",
          "Year 2",
          "Year 3",
          "Year 4",
          "Year 5",
          "Year 6",
          "Year 7",
          "Year 8",
          "Year 9",
          "Year 10"
        ],
        y: [2433, 2644, 2755, 2956, 3165, 3498, 3532, 3632, 3814, 4234],
        type: "scatter",
        marker: {
          color: "#fff"
        },
        width: 0.6,
        name: "Net Operating Income"
      }
    ];

    var layoutBlue = {
      showlegend: false,
      titlefont: {
        size: 14
      },
      legend: {
        x: 0.15,
        y: -0.25,
        traceorder: "normal",
        font: {
          family: "sans-serif",
          size: 11,
          color: "#fff"
        }
      },
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",

      height: 300,
      margin: {
        l: 50,
        r: 10,
        b: 40,
        t: 25,
        pad: 2
      },
      font: {
        family: "Arial",
        size: 13,
        color: "rgba(245,246,249,1)"
      },

      xaxis: {
        visible: false,
        color: "#fff",
        domain: [0, 0.3],
        gridcolor: "#ffffff33"
      },
      xaxis2: {
        color: "#fff",
        domain: [0.33, 0.6]
      },
      xaxis3: {
        color: "#fff",
        domain: [0.66, 1]
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
    layoutGreen.annotations = [];
    layoutGreen.xaxis.domain = [0, 1];
    layoutGreen.showlegend = true;

    var NPV = JSON.parse(JSON.stringify(layoutGreen));
    var IRR = JSON.parse(JSON.stringify(layoutGreen));
    var YearChart = JSON.parse(JSON.stringify(layoutGreen));

    NPV.title = "Net Present Value";
    IRR.title = "Internal Rate of Return ";
    IRR.yaxis.tickformat = ",.0%";
    YearChart.xaxis.visible = true;
    YearChart.legend.orientation = "h";

    Plotly.newPlot("bar-chart-1", data, NPV, {
      responsive: true,
      displayModeBar: false
    });

    Plotly.newPlot("bar-chart-2", data2, IRR, {
      responsive: true,
      displayModeBar: false
    });

    Plotly.newPlot("bar-chart-3", data3, YearChart, {
      responsive: true,
      displayModeBar: false
    });
  },
  computed: {},
  methods: {}
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
</style>
