const menuToggle = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
         menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
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

window.addEventListener('click', (e) => {
  if (e.target === navMenu) {
        navMenu.classList.toggle('show');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});


// Modal logic
const letsTalkButtons = document.querySelectorAll('.lets-talk-btn');
const letsTalkButton = document.getElementById('lets-talk-btn');
const modal = document.querySelector('.contact-modal');
const closeModal = document.querySelector('.close-contact-modal');

letsTalkButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    })
});



if(closeModal){
    closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Toast notification
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); 
}

// Handle Contact Form Submission
const contactForm = document.querySelector('.contact-form');

if(contactForm) {
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Close modal
 if(modal) {
   modal.style.display = 'none';
 }

  // Show toast
  showToast();

  // Reset form fields
  contactForm.reset();
});
}

letsTalkButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
})
