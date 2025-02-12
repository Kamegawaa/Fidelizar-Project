document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
  
      if (targetSection) {
        const offset = 80;
        const targetPosition = targetSection.offsetTop - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
