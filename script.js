// Tea House Interactive Features

// Smooth scroll for menu link
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector('#menu');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Add interactivity to tea cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 25px 50px rgba(122, 157, 111, 0.15)';
    });
    
    card.addEventListener('mouseout', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });

    card.addEventListener('click', function() {
      const teaName = this.querySelector('h3').textContent;
      alert(`You selected: ${teaName}! Add to cart? (Feature coming soon)`);
    });
  });

  // Simple page scroll animations
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });
});
