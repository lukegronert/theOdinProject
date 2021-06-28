const api_key = '30303c4b0a5b602c9cdab00b9975eef4';
const searchBar = document.querySelector('input');
const searchIcon = document.querySelector('#searchIcon');

const celcius = true;

const description = document.querySelector('#weatherInfo-description');
const icon = document.querySelector('#weatherInfo-icon img');
const cityName = document.querySelector('#weatherInfo-city');
const temperature = document.querySelector('#weatherInfo-temperature');

const sunrise = document.querySelector('#sunrise .dataNumbers')
const sunset = document.querySelector('#sunset .dataNumbers')
const chanceOfRain = document.querySelector('#chanceOfRain .dataNumbers')
const humidity = document.querySelector('#humidity .dataNumbers')
const feelsLike = document.querySelector('#feelsLike .dataNumbers')

getWeather('Taipei').then(response => {
    console.log(response)
    setAll(response);
});

searchIcon.addEventListener('click', () => {
    $(searchBar).animate({width: 'toggle', display: 'block'}, 300)
    setTimeout(() => {
        searchBar.focus() 
    }, 300);
})

searchBar.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        const city = searchBar.value;
        getWeather(city).then(response => {
            console.log(response)
            setAll(response);
        });
    }
})

async function getWeather(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    return response.json();
}

function setAll(response) {
    setDescription(response);
    setIcon(response);
    setCityName(response);
    setTemperature(response);
    const timeInfo = getTimes(response);
    setSunrise(timeInfo.sunrise);
    setSunset(timeInfo.sunset);
    setChanceOfRain(response)
    setHumidity(response);
    setFeelsLike(response);
}

function setDescription(response) {
    description.innerText = response.weather[0].main;
}

function setIcon(response) {
    icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
}

function setCityName(response) {
    cityName.innerText = response.name;
}

function setTemperature(response) {
    if(celcius) {
        temperature.textContent = ((response.main.temp) - 273.15).toFixed(1) + '°C';
    } else {
        temperature.textContent = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(1) + '°F';
    }
}

function getTimes(response) {
    let timeInfo = {}
    timeInfo.sunrise = new Date(response.sys.sunrise*1000);
    timeInfo.sunset = new Date(response.sys.sunset*1000);
    timeInfo.currentTime = new Date(response.dt*1000);
    return timeInfo;
}

function setSunrise(time) {
    const timeStr = String(time)
    const fullTime = timeStr.split(' ')[4];
    const hours = fullTime.slice(0,5)
    console.log(hours);
    sunrise.textContent = hours;
}

function setSunset(time) {
    const timeStr = String(time)
    const fullTime = timeStr.split(' ')[4];
    const hours = fullTime.slice(0,5)
    console.log(hours);
    sunset.textContent = hours;
}

async function setChanceOfRain(response) {
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=30303c4b0a5b602c9cdab00b9975eef4`)
        .then(r => r.json());
        console.log(weatherData)
    chanceOfRain.textContent = weatherData.daily[0].pop * 100 + '%';
}

function setHumidity(response) {
    humidity.textContent = response.main.humidity + '%';
}

function setFeelsLike(response) {
    if(celcius) {
        feelsLike.textContent = Number(response.main.temp - 273.15).toFixed(1) + '°C'
    } else {
        feelsLike.textContent = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(1) + '°F';
    }
}