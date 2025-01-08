function showPage(pageId) {
  // Ocultar todas las páginas
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Mostrar la página seleccionada
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}

// Mostrar la página "Home" al cargar
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});