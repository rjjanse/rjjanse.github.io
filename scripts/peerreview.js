// From: https://developers.google.com/chart/interactive/docs/gallery/histogram#overview
// Load packages
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

// Function for making chart
function drawChart() {
  // Data
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Number', {role: 'tooltip'}],
    ["2022", 4, "AJKD, CKJ, NDT, NTvG"],
    ["2023", 6, "BMJ Open, CKJ, JASN, Kidney Int, NDT"],
    ["2024", 11, "BMC Medical Educ, CKJ, Health Sci Rep, J Nephrol, Kidney Med, Kidney360, Lancet Healthy Longev, NDT, Sci Rep"]
  ]);

  // Chart options
  var options = {
    legend: {
      position: 'none'
    },
    colors: ['#C9CBA3'],
    backgroundColor: "transparent",
    chartArea: {
      backgroundColor: "transparent"
    },
    bar: {
      groupWidth: "95%",
    },
    hAxis: {
      title: "Nr. of papers peer reviewed",
      titleTextStyle: {
        color: "#FFE1A8"
      },
      textStyle: {
        color: "#FFE1A8"
      },
      gridlines: {
        color: "#FFE1A8"
      }
    },
    vAxis: {
      title: "",
      textStyle: {
        color: "#FFE1A8"
      },
      minValue: 0,
      gridlines: {
        color: "#FFE1A8"
      }
    },
    orientation: "vertical" // Flip the bar chart
  };

  // Draw chart
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
