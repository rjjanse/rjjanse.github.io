// Load packages
google.charts.load("current", {packages:["corechart"]});

// Get theme button
var theme_btn = document.getElementById("theme");

// Get stylesheet link
var style_link = document.getElementById("stylesheet");

// Get all elements with a themed image
var themed_imgs = document.querySelectorAll(".themed");

// Get script for peer review chart
//var newChart = new google.visualization.BarChart(document.getElementById("chart_div"));

// Observe button click
theme_btn.addEventListener("click", (e) => {
    // Get current stylesheet
    var current_style = style_link.getAttribute("href");
    
    // If dark, set new style to light
    if (current_style.includes("dark")) var new_style = current_style.replace("dark", "light");

    // If light, set new style to dark
    else var new_style = current_style.replace("light", "dark");
    
    // Change style
    style_link.setAttribute("href", new_style);

    // Change themed images
    /*for (var i = 0; i < themed_imgs.length; i++) {
        // Set to corresponding source
        if (new_style.includes("dark")) themed_imgs[i].setAttribute("src", themed_imgs[i].getAttribute("src").replace("light", "dark"));

        // Set to corresponding source
        else themed_imgs[i].setAttribute("src", themed_imgs[i].getAttribute("src").replace("dark", "light"));
    }

    // If dark, define new light options
    if (current_style.includes("dark")) var options = {
        legend: {
            position: 'none'
        },
        colors: ['#B3C186'],
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
            color: "#CA8F53"
          },
          textStyle: {
            color: "#CA8F53"
          },
          gridlines: {
            color: "#CA8F53"
          }
        },
        vAxis: {
          title: "",
          textStyle: {
            color: "#CA8F53"
          },
          minValue: 0,
          gridlines: {
            color: "#CA8F53"
          }
        },
        orientation: "vertical" // Flip the bar chart
    };

    // Otherwise, set dark options
    else options = {
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

    // Redraw the chart with updated options
    newChart.draw(newChart.getDataTable(), google.visualization.BarChart.convertOptions(options));*/
})