// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Animación de escritura para .typing-text
const typingElement = document.querySelector('.typing-text');
const words = ['Fotógrafo', 'Diseñador', 'Soñador', 'Animador', 'Creativo', 'Editor de Video'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingElement) return; // Evita errores si el elemento no existe

  const currentWord = words[wordIndex];
  typingElement.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 120); // Velocidad de escritura
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60); // Velocidad de borrado
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1200); // Pausa antes de cambiar palabra
  }
}

// Iniciar efecto de escritura
if (typingElement) {
  type();
  // Cursor parpadeante sincronizado
  setInterval(() => {
    typingElement.style.borderRightColor =
      typingElement.style.borderRightColor === 'transparent' ? '#fd6d0d' : 'transparent';
  }, 500);
}

// Manejo de eventos táctiles para iconos de redes sociales
document.querySelectorAll('.social-icons a, .footer-social-icons a').forEach(icon => {
  icon.addEventListener('touchstart', () => {
    icon.classList.add('active');
  });
  icon.addEventListener('touchend', () => {
    setTimeout(() => {
      icon.classList.remove('active');
      // Forzar la reversión de estilos
      icon.style.transition = 'none';
      icon.style.transform = '';
      icon.style.color = '';
      icon.style.textShadow = '';
      const iconImg = icon.querySelector('.icon-png');
      if (iconImg) {
        iconImg.style.transform = '';
        iconImg.style.filter = '';
      }
      setTimeout(() => {
        icon.style.transition = 'all 0.4s ease-out';
        if (iconImg) {
          iconImg.style.transition = 'all 0.4s ease-out';
        }
      }, 10);
    }, 300); // Espera la duración de la animación
  });
});