// From: https://developers.google.com/chart/interactive/docs/gallery/histogram#overview 
// Load packages
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

// Function for making chart
function drawChart() {
    // Data
    var data = google.visualization.arrayToDataTable([
      ['Journal', 'Year'],
      ['Kidney International', 2023],
      ['Clinical Kidney Journal', 2023],
      ['Journal of the American Society of Nephrology (JASN)', 2023],
      ['British Medical Journal (BMJ) Open', 2023],
      ['Nephrology Dialysis Transplantation (NDT)', 2022],
      ['Nederlands Tijdschrift voor Geneeskunde (NTvG)', 2022],
      ['Clinical Kidney Journal (CKJ)', 2022],
      ['American Journal of Kidney Disease (AJKD)', 2022]]);
  
    // Chart options
    var options = {
      legend: { position: 'none' },
      hAxis: {format: 'none'},
      colors: ['#D17010'],
      backgroundColor: "#EDF2F4",
      chartArea: {backgroundColor: "#EDF2F4"},
      histogram: {bucketSize: 0.6}
    };

    // Draw chart
    var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
}
