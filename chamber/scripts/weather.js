const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');

const now = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const after = document.querySelector('#after');

const apikey = '250134d43db4065f0de2d71ea5704be6';
const lat = -32.369198713061536;
const lon = -54.16417938338321;
const key = "api";

const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}


function displayWeatherResults(data) {
    currentTemp.innerHTML = `<b>${data.main.temp}</b>ºC`;
    high.innerHTML = `High: ${data.main.temp_max}ºC`;
    low.innerHTML = `Low: ${data.main.temp_min}ºC`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecastResults(data) {
    const tempsByDate = {};

    data.list.forEach(entry => {
        const dateStr = entry.dt_txt.split(' ')[0];
        const tempMax = entry.main.temp_max;

        if (!tempsByDate[dateStr]) {
            tempsByDate[dateStr] = [];
        }

        tempsByDate[dateStr].push(tempMax);
    });
    const sortedDates = Object.keys(tempsByDate).sort();

    const tomorrowDate = sortedDates[2];
    const afterDate = sortedDates[3];
    const date = new Date(tomorrowDate.replace(" ", "T"));
    const afterTime = new Date(afterDate.replace(" ", "T"));
    const weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    const afterWeekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(afterTime);
    now.innerHTML = `Today: <b>${data.list[0].main.temp_max}</b>ºC`;
    tomorrow.innerHTML = `${weekDay}: <b>${data.list[2].main.temp_max}</b>ºC`;
    after.innerHTML = `${afterWeekDay} <b>${data.list[10].main.temp_max}</b>ºC`;
}

apiFetch();
forecastApiFetch();