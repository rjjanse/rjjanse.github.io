// Get img
var img = document.getElementById("climb-image");

// Array of possible images
var images = ["germany.png", "toprope.gif", "france.png", "boulder.gif"];

// Left button
var left = document.getElementById("interest-img-scroller-left");

// Right button
var right = document.getElementById("interest-img-scroller-right");

// Start index is 0
var index = 0

// Listen for left button click
left.addEventListener("click", (e) => {
    // If index is 0, go back to 3
    if (index == 0) {
        index = 3
    } else {
        index -= 1
    }

    // Get new image
    var new_image = images[index]

    // Set src of img to new image
    img.setAttribute("src", "images/interests/climbing/" + new_image)
})

// Listen for right button click
right.addEventListener("click", (e) => {
    // If index is 0, go back to 3
    if (index == 3) {
        index = 0
    } else {
        index += 1
    }

    // Get new image
    var new_image = images[index]

    // Set src of img to new image
    img.setAttribute("src", "images/interests/climbing/" + new_image)
})