// Get the button that opens the publication
var btn = document.querySelectorAll(".publication-button");

// All page publications
var pubs = document.querySelectorAll(".publication");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    // Check if button is clicked
    btn[i].addEventListener("click", (e) => {
        // Get publication based on button name
        var pub = document.getElementById(e.target.getAttribute("name"));

        // Set all publications to invisible
        for (var p = 0; p < pubs.length; p++) {
            // Set publication to not visible
            pubs[p].style.display = "none";
        }

        // Set publication visible
        pub.style.display = "block";
 });
}
 