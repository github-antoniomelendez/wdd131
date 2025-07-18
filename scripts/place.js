// Static values these are to be replaced later with dynamic API input
const temperature = 25; // Celsius
const windSpeed = 13;    // km/h


// Calculates wind chill based on Celsius formula, uses one line of code.
function calculateWindChill(tempC, windKmH) {
  return (
    13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmH, 0.16) + 0.3965 * tempC * Math.pow(windKmH, 0.16)).toFixed(1);
}

// Applies calculateWindChill Function if conditions are met
window.addEventListener("DOMContentLoaded", () => {
  let windChillValue = "N/A";

  // Check if conditions allow wind chill to be calculated
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = `${calculateWindChill(temperature, windSpeed)} °C`;
  }

  // Find the <span> inside the "Wind Chill" <li> and update it
  const windChillSpan = document.querySelector(
    ".weather li:nth-child(4) span"
  );

  if (windChillSpan) {
    windChillSpan.textContent = windChillValue;
  }
});

// Gets the current year and the last modification date
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("currentyear").textContent = year;
  
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastMod}`;
  });

