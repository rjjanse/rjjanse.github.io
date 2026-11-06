// Get img
var img = document.getElementById("highlight-img");

// Get link
var link = document.getElementById("highlight-link")

// Array of possible images
var images = [
    "janse-2020-clin_kidney_j.png", 
    "janse-2022-clin_kidney_j.png", 
    "janse-2025-clin_kidney_j.png", 
    "janse-2025-kidney_med.png", 
    "janse-2025-nephrol_dial_transplant.png", 
    "milders-2024-j_am_soc_nephrol.png", 
    "ohara-2024-diab_res_clin_pract.png"
];

// Corresponding DOIs
var doi = [
    "https://doi.org/10.1093/ckj/sfab085",
    "https://doi.org/10.1093/ckj/sfac003",
    "https://doi.org/10.1093/ndt/gfae170",
    "https://doi.org/10.1016/j.xkme.2025.101016",
    "https://doi.org/10.1093/ndt/gfae170",
    "https://doi.org/10.1681/asn.0000000000000285",
    "https://doi.org/10.1016/j.diabres.2024.111745"
];

// Define index
var index = Math.floor(Math.random() * images.length)

// Get new image
var new_image = images[index]

// Get new href
var new_href = doi[index]

// Set src of img to new image
img.setAttribute("src", "images/publications/" + new_image)

// Set href of a to new doi
link.setAttribute("href", new_href)
