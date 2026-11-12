document.addEventListener('DOMContentLoaded', () => {
  // 1. Controle do Menu Responsivo (Mobile)
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Fecha o menu automaticamente ao clicar em algum link no celular
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // 2. Animação das Barras de Gráfico ao rolar a página
  const bars = document.querySelectorAll('.bar-fill');
  const marketSection = document.getElementById('mercado');

  const animateBars = () => {
    bars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    });
  };

  // Observa quando a seção de Mercado aparece na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  if (marketSection) {
    observer.observe(marketSection);
  }
});
