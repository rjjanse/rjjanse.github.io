// From: https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page
// Get the button that opens the modal
var btn = document.querySelectorAll(".pubbutton");

// All page modals
var modals = document.querySelectorAll(".modal");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close-button");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].addEventListener("click", (e) => {
   var modal = document.getElementById(e.target.id.replace("-button", ""));
   modal.style.display = "block";
 });
}
 
// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}