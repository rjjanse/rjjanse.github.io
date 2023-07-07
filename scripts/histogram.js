// From: https://developers.google.com/chart/interactive/docs/gallery/histogram#overview 
// Load packages
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

// Function for making chart
function drawChart() {
    // Data
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Number', {role: 'tooltip'}],
      ["2022", 4, 'AJKD, CKJ, NDT, NTvG'],
      ["2023", 4, 'BMJ Open, CKJ, JASN, Kidney Int']])
  
    // Chart options
    var options = {
      legend: {
        position: 'none' 
      },
      colors: ['#D17010'],
      backgroundColor: "#EDF2F4",
      chartArea: {
        backgroundColor: "#EDF2F4"
      },
      histogram: {
        bucketSize: 0.6
      },
      hAxis: {
        title: ""
      },
      vAxis: {
        title: "Nr. of citations",
        minValue: 0
      }
    };

    // Draw chart
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
