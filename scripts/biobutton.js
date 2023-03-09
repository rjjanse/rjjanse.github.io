// Get button element
var button = document.getElementById("bio-image-button");

// Get image element
var image = document.getElementById("bio-image-image");

// Get list of possible images
var images = ["https://github.com/rjjanse/rjjanse.github.io/blob/main/images/picture.jpg?raw=true", 
                "https://github.com/rjjanse/rjjanse.github.io/blob/main/images/picture_2.jpg?raw=true"];

// Add button listener
button.addEventListener("click", (e) => {
    // Get current image
    var current_image = image.src
    
    // Get image that is not currently used
    var new_image = images.filter(function(e) {return e !== current_image})

    // Set new image
    image.src = new_image;
})


