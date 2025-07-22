// All publications
var pub_buttons = document.querySelectorAll(".publication-button");

// Get the dropdown button for authorship
var btn_author = document.getElementById("pub-filter-author");

// Get the dropdown button for approach
var btn_approach = document.getElementById("pub-filter-approach");

// Get the dropdown button for discipline
var btn_disc = document.getElementById("pub-filter-discipline");

//// Authorship
// Check for value change
btn_author.onchange = (e) => {
    /// Set other arrays
    // Approach
    var pubs_approach = document.querySelectorAll("."+btn_approach.value);

    if(btn_approach.value == "pfap-all") pubs_approach = document.querySelectorAll(".publication-button");

    // Discipline
    var pubs_disc = document.querySelectorAll("."+btn_disc.value);

    if(btn_disc.value == "pfd-all") pubs_disc = document.querySelectorAll(".publication-button");

    /// Set this array
    // Get value
    var val = e.srcElement.value;

    // Get publications with that value assigned
    var pubs_author = document.querySelectorAll("."+val);

    // If value is all, select all publications again
    if (val == "pfa-all") var pubs_author = document.querySelectorAll(".publication-button");

    // Subset arrya to include items present in all publication filters
    var pubs_author_final = [...pubs_author].filter(node => [...pubs_approach].includes(node) && [...pubs_disc].includes(node));
    
    // Set all publications to invisible
    for (var p = 0; p < pub_buttons.length; p++) {
        // Set publication to not visible
         pub_buttons[p].style.display = "none";
    }

    // Set selected publications to visible
    for (var q = 0; q < pubs_author_final.length; q++) {
        // Set publication to not visible
         pubs_author_final[q].style.display = "block";
    }
}

//// Approach
// Check for value change
btn_approach.onchange = (e) => {
    /// Set other arrays
    // Author
    var pubs_author = document.querySelectorAll("."+btn_author.value);

    if(btn_author.value == "pfa-all") pubs_author = document.querySelectorAll(".publication-button");

    // Discipline
    var pubs_disc = document.querySelectorAll("."+btn_disc.value);

    if(btn_disc.value == "pfd-all") pubs_disc = document.querySelectorAll(".publication-button");

    /// Set this array
    // Get value
    var val = e.srcElement.value;

    // Get publications with that value assigned
    var pubs_approach = document.querySelectorAll("."+val);

    // If value is all, select all publications again
    if (val == "pfap-all") var pubs_approach = document.querySelectorAll(".publication-button");

    // Subset arrya to include items present in all publication filters
    var pubs_approach_final = [...pubs_approach].filter(node => [...pubs_author].includes(node) && [...pubs_disc].includes(node));

    // Set all publications to invisible
    for (var p = 0; p < pub_buttons.length; p++) {
        // Set publication to not visible
         pub_buttons[p].style.display = "none";
    }

    // Set selected publications to visible
    for (var q = 0; q < pubs_approach_final.length; q++) {
        // Set publication to not visible
         pubs_approach_final[q].style.display = "block";
    }
}

//// Discipline
// Check for value change
btn_disc.onchange = (e) => {
    /// Set other arrays
    // Author
    var pubs_author = document.querySelectorAll("."+btn_author.value);

    if(btn_author.value == "pfa-all") pubs_author = document.querySelectorAll(".publication-button");

    // Approach
    var pubs_approach = document.querySelectorAll("."+btn_approach.value);

    if(btn_approach.value == "pfap-all") pubs_approach = document.querySelectorAll(".publication-button");

    /// Set this array
    // Get value
    var val = e.srcElement.value;

    // Get publications with that value assigned
    var pubs_disc = document.querySelectorAll("."+val);

    // If value is all, select all publications again
    if (val == "pfd-all") var pubs_disc = document.querySelectorAll(".publication-button");

    // Subset arrya to include items present in all publication filters
    var pubs_disc_final = [...pubs_disc].filter(node => [...pubs_author].includes(node) && [...pubs_approach].includes(node));

    // Set all publications to invisible
    for (var p = 0; p < pub_buttons.length; p++) {
        // Set publication to not visible
         pub_buttons[p].style.display = "none";
    }

    // Set selected publications to visible
    for (var q = 0; q < pubs_disc_final.length; q++) {
        // Set publication to not visible
         pubs_disc_final[q].style.display = "block";
    }
}


