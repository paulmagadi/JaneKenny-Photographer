const menuToggle = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
         menuToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})

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


