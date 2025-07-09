// Gets the current year and the last modification date
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("currentyear").textContent = year;
  
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastMod}`;
  });

// Hamburger Menu
const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');

    // Toggle between ☰ and ✖ symbols
    toggleButton.innerHTML = nav.classList.contains('show') ? '✖' : '&#9776;';
});