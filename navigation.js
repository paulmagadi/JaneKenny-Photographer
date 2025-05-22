const menuToggle = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
         menuToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    })
});