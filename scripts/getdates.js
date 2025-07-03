// Gets the current year and the last modification date
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("currentyear").textContent = year;
  
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastMod}`;
  });
  