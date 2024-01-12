

function searchCity(city) {
let apiKey = "a94b5f688aoee508a9b7fca6t23274ef";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
 axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML =  Math.round(temperature);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Charlotte");