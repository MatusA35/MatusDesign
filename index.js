
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });






  const typingElement = document.querySelector(".typing-text");
  const words = ["Fotógrafo", "Diseñador Gráfico", "Soñador", "Animador", "Creativo", "Editor de Video"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100); // Velocidad de escritura
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50); // Velocidad de borrado
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 1000); // Espera antes de cambiar palabra
    }
  }

  // Iniciar efecto
  type();

  // Cursor parpadeante sincronizado
  setInterval(() => {
    typingElement.style.borderRightColor =
      typingElement.style.borderRightColor === 'transparent' ? '#ffff00' : 'transparent';
  }, 500);




  
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





