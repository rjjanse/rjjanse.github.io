// Code from: https://stackoverflow.com/questions/27027480/choosing-a-random-background-html-css
// Define images
var images = ["1", "2", "3", "4", "5", "6", "7", "9", "10"];

// Set background
document.getElementsByClassName("home")[0].style.backgroundImage = "url(https://github.com/rjjanse/rjjanse.github.io/blob/main/images/landing" + images[Math.floor(Math.random() * images.length)] + ".jpeg?raw=true)";
