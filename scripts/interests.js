// Get the button that opens the publication
var btn = document.querySelectorAll(".interest-button");

// All page publications
var interests = document.querySelectorAll(".interest");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    // Check if button is clicked
    btn[i].addEventListener("click", (e) => {
        // Get publication based on button name
        var interest = document.getElementById(e.target.getAttribute("name"));

        // Set all publications to invisible
        for (var p = 0; p < interests.length; p++) {
            // Set publication to not visible
            interests[p].style.display = "none";
        }

        // Set publication visible
        interest.style.display = "block";
 });
}
 