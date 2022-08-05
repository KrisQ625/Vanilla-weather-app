let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Spetember",
  "Ocktober",
  "November",
  "December"
];

let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
now = document.querySelector("#time");
now.innerHTML = `  ${currentDay}, ${currentMonth}, ${currentDate}`;

function displayForecast(){
  let forecastElement=document.querySelector("#forecast");
   forecastHTML=`<div class="row">`
  let days= ["Thur", "Frid", "Sat","Sun","Mon"];
  days.forEach(function(day){ 
  forecastHTML=forecastHTML+
  ` <div clss="col-2">
      <div clas="forecast-day">${day}</div>
      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" width="50"/>
      <span class="max-forecast">18</span>
      <span class="min-forecast">12</span>
    
  </div>
` });

  
forecastHTML=forecastHTML+`</div>`;
forecastElement.innerHTML=forecastHTML;
}
function searchCity(event){
event.preventDefault();
let cityName= document.querySelector("#city-input");
let city=`${cityName.value}`;

let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e8a7198dcdc5f4458611e02123c52297`

axios.get(apiUrl).then(showTemp);

}
let search = document.querySelector("#search-form");
search.addEventListener("submit", searchCity);

function showTemp(response)
{let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = ` ${temperature} °`;
  let description = response.data.weather[0].description;
  
  let descriptionWeather = document.querySelector("#description");
  descriptionWeather.innerHTML = ` ${description}`;
  let iconElement= response.data.weather[0].icon;
let humidity=document.querySelector("#humidity");
humidity.innerHTML=(response.data.main.humidity);
let wind= document.querySelector("#wind");
wind.innerHTML=Math.round(response.data.wind.speed);
  let name = document.querySelector("#city");
  name.innerHTML = response.data.name;
  let icon= document.querySelector("#icon");
  icon.setAttribute("src",`http://openweathermap.org/img/wn/${iconElement}@2x.png`);
  celsiusTemperature=Math.round(response.data.main.temp);

  displayForecast();
  
}
let celsiusTemperature=null

function showCelsius(event){
  event.preventDefault();
  let temperatureElement=document.querySelector("#temperature");
  temperatureElement.innerHTML=`${celsiusTemperature}°C`;

}
function showFahrenheit(event){
  event.preventDefault();
  let temperatureElement=document.querySelector("#temperature");
  let fahrenheitTemperature= (celsiusTemperature*9)/5+32;
temperatureElement.innerHTML=`${Math.round(fahrenheitTemperature)} °F`;
}

let celsiusLink=document.querySelector("#celsius");
celsiusLink.addEventListener("click",showCelsius);

 let fahrenheitLink=document.querySelector("#fahr");
 fahrenheitLink.addEventListener("click",showFahrenheit);