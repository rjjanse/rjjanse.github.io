// Get all CV expand buttons
var buttons = document.querySelectorAll(".cv-expand");

// Listen for button clicks
for(var i = 0; i < buttons.length; i++) {
    // Check if button is clicked
    buttons[i].addEventListener("click", (e) => {
        // Get CV category
        var cv_category = document.getElementById(e.target.getAttribute("name"));
        
        // Check whether category currently contains fade (i.e., unclicked)
        if(cv_category.classList.contains("fade")) {
            // Set that category's height to 100%
            cv_category.style.height = "100%";

            // Remove fade
            cv_category.classList.remove("fade");

            // Change button
            e.target.textContent = "v";

            // Remove margin at bottom only present for fade
            cv_category.querySelector(".cv-item-end").style.height = "0";
        }

        // If unclicked, change back to original
        else {
            // Set that category's height to 100%
            cv_category.style.height = "20em";

            // Remove fade
            cv_category.classList.add("fade");

            // Change button back
            e.target.textContent = ">";

            // Add margin at bottom only present for fade
            cv_category.querySelector(".cv-item-end").style.height = "5em";
        }
 });
}