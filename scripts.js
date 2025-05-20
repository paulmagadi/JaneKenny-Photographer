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
