const images = document.querySelectorAll(".slider img");
let index = 0;

function showImage() {
    // Remove active class from all images
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }

    // Set active class to current image
    images[index].classList.add("active");

    // Increment index or reset to 0 if end of array is reached
    index = (index + 1) % images.length;
}

// Call showImage every 3 seconds
setInterval(showImage, 3000);