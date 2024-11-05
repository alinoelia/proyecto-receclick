function updateParagraphContent() {
  const paragraph = document.querySelector('.p-inicio');
  if (window.matchMedia('(max-width: 600px)').matches) {
    paragraph.style.display = 'none'; // Oculta el párrafo
  } else {
    paragraph.style.display = 'block'; // Muestra el párrafo en pantallas grandes
  }
}
// Ejecutar la función en carga de página y en cambio de tamaño
updateParagraphContent();
window.addEventListener('resize', updateParagraphContent);
