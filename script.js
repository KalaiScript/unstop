// Tea House Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  const cards = document.querySelectorAll('.card');
  const selectionText = document.querySelector('.selection-text');
  const addOrderButton = document.querySelector('.add-order-button');
  const subscribeForm = document.getElementById('subscribe-form');
  const formMessage = document.querySelector('.form-message');
  let selectedTea = null;

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 100); // Stagger animation
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Stagger card animations
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        }, index * 100);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .special-item, .value-item, .team-member, .gallery-item, .event-item').forEach(item => {
    cardObserver.observe(item);
  });

  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector('#menu');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  cards.forEach(card => {
    card.addEventListener('click', function() {
      cards.forEach(node => node.classList.remove('focused'));
      this.classList.add('focused');

      selectedTea = this.querySelector('h3').textContent;
      const detail = this.dataset.detail;
      const benefit = this.dataset.benefit;

      selectionText.textContent = `${selectedTea} — ${detail} ${benefit}`;
      addOrderButton.disabled = false;
    });
  });

  if (addOrderButton) {
    addOrderButton.addEventListener('click', function() {
      if (!selectedTea) return;
      alert(`${selectedTea} has been added to your order. Enjoy your tea!`);
    });
  }

  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailInput = document.getElementById('email');
      const emailValue = emailInput.value.trim();

      if (!emailValue) {
        formMessage.textContent = 'Please enter a valid email address.';
        return;
      }

      formMessage.textContent = `Thanks! ${emailValue} is now subscribed.`;
      emailInput.value = '';
      addOrderButton.blur();
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formMessage = contactForm.querySelector('.form-message');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !subjectInput.value.trim() || !messageInput.value.trim()) {
        formMessage.textContent = 'Please fill in all fields.';
        return;
      }

      formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
      contactForm.reset();
    });
  }
