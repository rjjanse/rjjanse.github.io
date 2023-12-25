// Get all headers
var headers = document.getElementsByClassName("skills-heading");

// Get all dropdowns
var dropdowns = document.getElementsByClassName("skills-dropdown");

// Iterate through headers
for(var i = 0; i < headers.length; i++) {
    // Add event listener for each header
    headers[i].addEventListener("click", (e) => {
        // Set all dropdowns to inactive
        for(var a = 0; a < dropdowns.length; a++){
            // Set d ropdown to inactive
            dropdowns[a].setAttribute("name", "");
        }

        // Get dropdown id of interest
        var id = e.target.getAttribute("name");

        // Set dropdown of interest name to active
        document.getElementById(id).setAttribute("name", "active");
    })
}