// Get all CV buttons
var cv_buttons = document.querySelectorAll(".cv-button");

// Get all CV content divs
var cv_content = document.querySelectorAll(".cv-content");

// Set working experience to active (default)
document.getElementById("we").style.display = "block";

// For loop to cycle through buttons
for(var i = 0; i < cv_buttons.length; i++) {
    // Add event listener
    cv_buttons[i].addEventListener("click", (e) => {
        // On button click set all names to not active
        for(var a = 0; a < cv_buttons.length; a++) {
            // Set button to not active
            cv_buttons[a].setAttribute("name", "");
        }

        // Set clicked button to active
        e.target.setAttribute("name", "active");

        // Set all CV content divs to invisible
        for(var b = 0; b < cv_content.length; b++) {
            // Set div display to none
            cv_content[b].style.display = "none";
        }

        // Get category of clicked item
        var cv_cat = e.target.getAttribute("class").replace(" cv-button", "");

        // Set clicked button category div to visible
        document.getElementById(cv_cat).style.display = "block";
    })
}