// Get elements
const myImage = document.getElementById("myImage");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

// When the small image is clicked
myImage.addEventListener("click", function() {
    lightbox.style.display = "flex";
    lightboxImg.src = myImage.src; // show the clicked image in the lightbox
});

// When the close button is clicked
closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Also close lightbox if you click outside the image
lightbox.addEventListener("click", function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
