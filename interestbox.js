// Get all buttons that open the interest box
var btn_interest = document.querySelectorAll(".pi-button");

// Get all interest boxes
var box = document.querySelectorAll(".interest-box");

// Get close buttons
var close = document.querySelectorAll(".close-interest-box");

// For each button add event listener
for (var i = 0; i < btn_interest.length; i++) {
    btn_interest[i].addEventListener("click", (e) => {
        // Get href attribute of button
        var href = e.target.getAttribute("name");

        // Set all interest boxes to invisible
        for(var a = 0; a < box.length; a++) {
            box[a].style.display = "none";
        }

        // Set interest box to visible
        document.getElementById(href).style.display = "block";
    })
}

// Close interest box when close button is clicked
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", (e) => {
        // Set all interest boxes to invisible
        for(var a = 0; a < box.length; a++) {
            box[a].style.display = "none";
        }
    })
}