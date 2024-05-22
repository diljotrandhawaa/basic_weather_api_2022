
let cityInput = document.querySelector('#city-input');

const searchBtn = document.querySelector('#search-btn');
const testBtn = document.querySelector('#btn-test');

const cityName = document.querySelector('#city-name');
const weatherType = document.querySelector('#weather-type');
const temp = document.querySelector('#temp');
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');


const getCity = () => {
  return cityInput.value;
}

const updateTemp = async () => {
  try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getCity()}&appid=d109c23fe7386a71216b85b6d43af4e6&units=metric`
    const data = await fetch(url);
    const jsonData = await data.json();
    updatePage(jsonData);
  }
    
  catch (error) {
    console.log(error.message);
    errorPage();
  }
}

const updatePage = (data) => {
    cityName.innerText = data.name;
    weatherType.innerText = data.weather[0].main;
    temp.innerText = data.main.temp;
    minTemp.innerText = data.main.temp_min;
    maxTemp.innerText = data.main.temp_max;
}

const errorPage = () => {
  document.querySelector('#error-msg').innerText = `Weather data is unavailable for '${cityInput.value}'`
  cityName.innerText = '----';
  weatherType.innerText = '----';
  temp.innerText = '--';
  minTemp.innerText = '--';
  maxTemp.innerText = '--';
}

searchBtn.onclick = () => {
  if (cityInput.value !== '') {
    document.querySelector('#error-msg').innerText = '';
    updateTemp();
  } else {
    document.querySelector('#error-msg').innerText = 'Please enter a City'
  }
} 

