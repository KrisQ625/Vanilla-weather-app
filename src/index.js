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