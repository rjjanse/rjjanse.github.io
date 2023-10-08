// Get theme button
var theme_btn = document.getElementById("theme");

// Get stylesheet link
var style_link = document.getElementById("stylesheet");

// Get all elements with a themed image
var themed_imgs = document.querySelectorAll(".themed");

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
    for (var i = 0; i < themed_imgs.length; i++) {
        // Set to corresponding source
        if (new_style.includes("dark")) themed_imgs[i].setAttribute("src", themed_imgs[i].getAttribute("src").replace("light", "dark"));

        // Set to corresponding source
        else themed_imgs[i].setAttribute("src", themed_imgs[i].getAttribute("src").replace("dark", "light"));
    }
})