const api_key = '30303c4b0a5b602c9cdab00b9975eef4';
const searchBar = document.querySelector('input');
const submitButton = document.querySelector('#submitButton');

async function getWeather(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    return response.json();
}

submitButton.addEventListener('click', () => {
    const city = searchBar.value;
    getWeather(city).then(response => console.log(response));
})
