// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth',
    });

    // Close menu on mobile after click
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Contact form validation and message
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name === '' || email === '' || message === '') {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill out all fields.';
    return;
  }

  if (!validateEmail(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Thank you! Your message has been sent.';

  contactForm.reset();
});

function validateEmail(email) {
  // Simple email regex validation
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}