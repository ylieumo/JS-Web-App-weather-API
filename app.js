import { getWeatherData } from './getWeather.js';

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const cityInput = document.getElementById('cityInput').value;
  

    if (cityInput === '') {
        alert('Please enter a city name');
        return;
    }

    try {
        const data = await getWeatherData(cityInput);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert(`Error fetching weather data: ${error.message || 'Unknown error'}`);
    }
});

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
    } else {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;
    }
}
