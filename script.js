// Tea House Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  const cards = document.querySelectorAll('.card');
  const selectionText = document.querySelector('.selection-text');
  const addOrderButton = document.querySelector('.add-order-button');
  const subscribeForm = document.getElementById('subscribe-form');
  const formMessage = document.querySelector('.form-message');
  let selectedTea = null;

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

  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
  });

  sections.forEach(section => observer.observe(section));
});
