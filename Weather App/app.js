const inputBox = document.querySelector(".input-box");
const searchButton = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const notFound = document.querySelector(".location-not-found");
const weatherBody=document.querySelector(".weather-body");


async function checkWeather(city) {
    const api_key = '96c1eb5bc99fd189cbb705d4b333d2bf';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weatherData= await fetch(url).then(response=>response.json());
    if(weatherData.cod === `404`){
     notFound.style.display="flex";
     weatherBody.style.display="none";
        return;
    }
    notFound.style.display="none";
    weatherBody.style.display="flex";
    temperature.innerHTML=`${Math.round(weatherData.main.temp-273.15)}°C`;
    description.innerHTML=`${weatherData.weather[0].description}`
    humidity.innerHTML=`${weatherData.main.humidity}%`;
    wind.innerHTML=`${weatherData.wind.speed}km/h`;
switch(weatherData.weather[0].main){
    case 'Clouds':
        weatherImg.src="/assets/cloud.png";
        break;
        case 'Clear':
        weatherImg.src="/assets/clear.png";
        break;
        case 'Rain':
        weatherImg.src="/assets/rain.png";
        break;
        case 'Mist':
        weatherImg.src="/assets/mist.png";
        break;
        case 'Snow':
        weatherImg.src="/assets/snow.png";
}


    console.log(weatherData)
    
  }
  

searchButton.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})
