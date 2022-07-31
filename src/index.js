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
  console.log(response);
  let descriptionWeather = document.querySelector("#description");
  descriptionWeather.innerHTML = ` ${description}`;
  let iconElement= response.data.weather[0].icon;
let humidity=document.querySelector("#humidity");
humidity.innerHTML=(response.data.main.humidity);
let wind= document.querySelector("#wind");
wind.innerHTML=(response.data.wind.speed);
  let name = document.querySelector("#city");
  name.innerHTML = response.data.name;
  let icon= document.querySelector("#icon");
  icon.setAttribute("src",`http://openweathermap.org/img/wn/${iconElement}@2x.png`);
  console.log(icon);
}