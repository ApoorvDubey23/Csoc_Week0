const apikey = "0dd98ea5e95519be38eb968ecbfe59a5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".wsrch input");
const searchBtn = document.querySelector(".wsrch button");

async function checkWeather(city) {
  const response = await fetch(`${apiurl}&q=${city}&appid=${apikey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".cityname").innerHTML = city;
  document.querySelector(".citytemp").innerHTML = data.main.temp + "°C";
  document.querySelector(".cityhum").innerHTML = Math.round(data.main.humidity) + "%";
  document.querySelector(".cityws").innerHTML = data.wind.speed + "km/hr";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
