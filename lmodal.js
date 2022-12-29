// Code from: https://stackoverflow.com/questions/27027480/choosing-a-random-background-html-css
// Define images
var images2 = ["1", "2", "3"];

// Get button
var button = document.getElementsByClassName("lies_img")

// On click set image
button[0].addEventListener("click", () => {
    document.getElementsByClassName("lies_img")[0].setAttribute("href", "https://github.com/rjjanse/rjjanse.github.io/blob/main/images/lies" + images2[Math.floor(Math.random() * images2.length)] + ".jpeg?raw=true)");
})




