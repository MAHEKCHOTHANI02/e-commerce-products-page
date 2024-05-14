const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("image-list");
let currentSlideIndex = 0; // Initialize the current slide index

// Function to handle clicking on each image
for (let i = 0; i < sliderImageList.length; i++) {
    sliderImageList[i].onclick = function(){
        sliderMainImage.src = sliderImageList[i].src;
        currentSlideIndex = i; // Update the current slide index
        console.log(sliderMainImage.src);
    };
}

// Function to handle previous slide
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = sliderImageList.length - 1; // Loop back to the last slide
    }
    sliderMainImage.src = sliderImageList[currentSlideIndex].src;
}

// Function to handle next slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= sliderImageList.length) {
        currentSlideIndex = 0; // Loop back to the first slide
    }
    sliderMainImage.src = sliderImageList[currentSlideIndex].src;
}