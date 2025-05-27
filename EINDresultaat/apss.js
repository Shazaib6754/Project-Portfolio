// Navigatiefunctie: toont alleen de juiste sectie
function navigate(pageId) {
  const sections = document.querySelectorAll("main section");

  sections.forEach(section => {
    section.style.display = section.id === pageId ? "block" : "none";
  });

  // Scroll naar boven na klikken
  window.scrollTo(0, 0);
}

// Laad standaard de home-pagina
window.onload = () => navigate("home");

  