function updateParagraphContent() {
  const paragraph = document.querySelector('.p-inicio');
  if (window.matchMedia('(max-width: 600px)').matches) {
    paragraph.textContent = 'Nuestra misión es crear recetas que aprovechen al máximo los alimentos y enseñar a reducir desperdicios, inspirando una cocina más sostenible.';
  } else {
    paragraph.textContent = 'Nuestra misión es crear recetas que aprovechen al máximo los alimentos y enseñar a reducir desperdicios, inspirando una cocina más sostenible. Además, ofrecemos productos en nuestro e-commerce para facilitar este estilo de vida.';
  }
}

// Ejecutar la función en carga de página y en cambio de tamaño
updateParagraphContent();
window.addEventListener('resize', updateParagraphContent);
