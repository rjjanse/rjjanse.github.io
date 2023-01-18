// Get all buttons except 'all' button
var btn = document.querySelectorAll(".button");

// Get 'all' button
var all = document.querySelectorAll(".button-all");

// Get all publications
var pubs = document.querySelectorAll(".pub");

// Get groups
var grps = ["ci", "pm", "ds", "md", "me"];

// Loop for clicker event
for(var i = 0; i < btn.length; i++) {
    // Listening for click on button
    btn[i].addEventListener("click", (e) => {
        // Set all buttons to inactive
        for(var a = 0; a < btn.length; a++) {
            // Set attribute name to inactive
            btn[a].setAttribute("name", "");
        }

        // Set 'all' button to inactive
        all[0].setAttribute("name", "");

        // Set button to active
        e.target.setAttribute("name", "active");

        // Get clicked button
        var showpub = e.target.id.replace("-button", "");

        // Get non-selected categories
        var hide = grps.filter(pub => !showpub.includes(pub));

        // Get selected category
        var show = grps.filter(pub => showpub.includes(pub));

        // Show pubs
        for(var a = 0; a < show.length; a++) {
            // Get array of iteration elements
            var pub = document.getElementsByClassName(show[a]);

            // Set each element to visible
            for (var b = 0; b < pub.length; b++) {
                // Make element visible
                pub[b].style.display = "block";
            }
        }

        // Hide pubs
        for(var c = 0; c < hide.length; c++) {
            // Get array of iteration elements
            var pub = document.getElementsByClassName(hide[c]);

            // Set each element to invisible
            for (var d = 0; d < pub.length; d++) {
                // Make element invisible
                pub[d].style.display = "none";
            }
        }
    })
}

// When 'all' button is clicked, set all to visible again
all[0].addEventListener("click", (e) => {
    // Set all publications to visible with for-loop
    for(var f = 0; f < pubs.length; f++) {
        // Set visible
        pubs[f].style.display = "block";

        // Set button to active
        all[0].setAttribute("name", "active");

        // Set all other buttons to non-active
        for(var g = 0; g < btn.length; g++) {
            btn[g].setAttribute("name", "");
        }

    }
})
