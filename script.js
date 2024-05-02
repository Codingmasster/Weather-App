const locationInput = document.getElementById("location");
const weatherInfo = document.getElementById("weather-info");

// Replace with your own API key from OpenWeatherMap
const API_KEY = "YOUR_API-KEY";

function fetchWeather() {
  const city = locationInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; // Use metric units by default

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].main;
      const description = data.weather[0].description;
      const temperature = Math.round(data.main.temp);

      weatherInfo.innerHTML = `
        <p>Location: ${city}</p>
        <p>Weather: ${weather} (${description})</p>
        <p>Temperature: ${temperature}°C</p>
      `;
    })
    .catch(error => {
      weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
