const profileImageContainer = document.querySelector('.profile-image');
let profileImages = document.querySelectorAll('.profile-image img');
let slideIndex = 0;
showSlides();

function showSlides(){
    for (image = 0; image < profileImages.length; image++) {
    profileImages[image].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > profileImages.length) {slideIndex = 1}
  profileImages[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}


document.addEventListener("DOMContentLoaded", function () {
    const profileContainer = document.querySelector(".instagram-gallery");
    const scrollLeft = document.querySelector(".scroll-left");
    const scrollRight = document.querySelector(".scroll-right");
  
    // Scroll left
    scrollLeft.addEventListener("click", () => {
      profileContainer.scrollBy({ left: -300, behavior: "smooth" });
    });
  
    // Scroll right
    scrollRight.addEventListener("click", () => {
      profileContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
  
    // Keyboard arrow key scrolling
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        profileContainer.scrollBy({ left: -300, behavior: "smooth" });
      } else if (event.key === "ArrowRight") {
        profileContainer.scrollBy({ left: 300, behavior: "smooth" });
      }
    });
});

const whyMeImagesContainer = document.querySelector('.why-me-images');
let whyMeImages = document.querySelectorAll('.why-me-images img');
let imageIndex = 0;
showImages();
function showImages(){
    for (image = 0; image < whyMeImages.length; image++) {
    whyMeImages[image].style.display = "none";
  }
  imageIndex++;
  if (imageIndex > whyMeImages.length) {imageIndex = 1}
  whyMeImages[imageIndex-1].style.display = "block";
  setTimeout(showImages, 4000);
}
