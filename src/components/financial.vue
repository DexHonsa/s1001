<template>
    <div>
        <Header />
        <div class="main-container container">
            <Sidebar activePage="financial" />
            <div class="content-panels animated-med fadeInUp">
                <div class="content-panel green">
                            
                            <div class="chart-container">
                                <div class="chart">
                                    <div id="bar-chart-1"></div>
                                </div>
                               
                            </div>
                            
                </div>
                <div class="content-panel pink">
                            
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
                    <div class="content-panel-top" style="border-bottom:none;">
                        <span>Oct 10, 2018</span>
                        <div class="content-panel-top-options">
                            <div class="standard-input-item" style="max-width: 250px">
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
export default {
  name: "financial",
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
        x: ["Budget", "Last Year", "Actual"],
        y: [2000000, 1800000, 1600000],
        type: "bar",
        marker: {
          color: ["#ffffff50", "#ffffff50", "#fff"]
        },
        width: [0.6, 0.6, 0.8],
        name: "NOI"
      },
      {
        x: ["Budget", "Last Year", "Actual"],
        y: [2000000, 1800000, 1600000],
        type: "bar",
        marker: {
          color: ["#ffffff50", "#ffffff50", "#fff"]
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
          color: ["#ffffff50", "#ffffff50", "#fff"]
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
          color: "#fff"
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
          color: "#3080e8"
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

    var layoutBlue = {
      showlegend: false,
      titlefont: {
        size: 14
      },
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      legend: {
        font: {
          size: 11
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
        family: "Arial",
        size: 13,
        color: "rgba(245,246,249,1)"
      },

      xaxis: {
        color: "#fff",
        domain: [0, 0.3]
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

    var workChart1 = JSON.parse(JSON.stringify(layoutGreen));
    var workChart2 = JSON.parse(JSON.stringify(layoutGreen));
    var workChart3 = JSON.parse(JSON.stringify(layoutGreen));

    workChart1.title = "Work Order Vs NOI & Asset Value";
    workChart2.title = "Work Order Vs Cost";
    workChart3.title = "Work Order Cost Vs NOI & Asset Value";

    Plotly.newPlot("bar-chart-1", data, layoutBlue, {
      responsive: true,
      displayModeBar: false
    });

    Plotly.newPlot("bar-chart-2", data2, workChart1, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-3", data2, workChart2, {
      responsive: true,
      displayModeBar: false
    });
    Plotly.newPlot("bar-chart-4", data2, workChart3, {
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
