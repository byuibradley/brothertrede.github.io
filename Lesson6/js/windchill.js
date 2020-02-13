const temperature = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('windspeed').textContent);
const windChill = (35.74 + (0.6215 * temperature) - (35.75 *(Math.pow(windSpeed, 0.16))) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16))));
document.getElementById('windChill').textContent = Math.ceil(windChill);