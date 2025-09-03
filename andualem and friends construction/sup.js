document.addEventListener('DOMContentLoaded', function () {
  // 1. Navigation active link highlight
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.style.fontWeight = 'bold';
          link.style.textDecoration = 'underline';
      }
  });

  // 2. Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // 3. Mobile menu toggle (if exists)
  const menuButton = document.getElementById('menuButton');
  const navMenu = document.querySelector('nav');

  if (menuButton && navMenu) {
      menuButton.addEventListener('click', () => {
          navMenu.classList.toggle('show');
      });
  }

  // 4. Contact form handling
  const form = document.getElementById('contact');

  if (form) {
      form.addEventListener('submit', function (e) {
          e.preventDefault();

          const name = form.querySelector('input[name="name"]').value.trim();
          const email = form.querySelector('input[name="email"]').value.trim();
          const message = form.querySelector('textarea[name="message"]').value.trim();

          if (!name || !email || !message) {
              alert('Please fill in all fields before submitting.');
              return;
          }

          alert(`Thank you, ${name}! We have received your message and will contact you at ${email}.`);
          form.reset();
      });
  }

  // 5. Optional welcome popup (only on Home page)
  if (currentPage === '123.html' || currentPage === '') {
      setTimeout(() => {
          alert('Welcome to Andualem & Friends Construction!');
      }, 1000);
  }
});