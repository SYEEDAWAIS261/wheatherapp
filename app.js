function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e0f99c494c2ce394a18cc2fd3f100543';  // Replace 'your_api_key' with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => console.error('Failed to fetch:', error));
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const display = document.getElementById('weatherDisplay');
    const imgdisplay = document.getElementById('imgdisplay')
    display.innerHTML = `<h2>Weather in ${name}</h2>
                         <p>${weather[0].main} - ${weather[0].description}</p>
                         <p>Temperature: ${main.temp}°C</p>
                         <p>Feels like: ${main.feels_like}°C</p>`;
}

document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});
