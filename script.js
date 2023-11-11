import { API_KEYS } from "./api_keys.js";

const API_KEY = API_KEYS;
let city = "Marseille";

async function getApi() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;
  const response = await fetch(url);
  const data = await response.json();

  /////////////////////////////////////INNER HTML//////////////////////////////
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".description").innerHTML =
    data.weather[0].description;

  let degres = (document.querySelector(".degres").innerHTML =
    Math.floor(data.main.temp) + "°C");

  let humidity = (document.querySelector(".humidity_text").innerHTML =
    data.main.humidity + " %");

  let speed = (document.querySelector(".speed_text").innerHTML =
    Math.floor(data.wind.speed) + " Km/h");
  ////////////////////////////////////////////////////////////
  let img = document.querySelector(".img_temp");

  switch (data.weather[0].main) {
    case "Clear":
      img.src = "./img/clear.png";
      console.log(img);
      break;
    case "Clouds":
      img.src = "./img/cloud.png";
      break;
    case "Haze":
      img.src = "./img/mist.png";
      break;
    case "Rain":
      img.src = "./img/rain.png";
      break;
    case "Snows":
      img.src = "./img/snow.png";
    default:
      img.src = "";
  }

  console.log(data);
}

getApi();
/////////RECHERCHE DE LA VILLE////////////////////////////
const searchButton = document.querySelector(".button_search");

searchButton.addEventListener("click", () => {
  city = document.querySelector(".search").value;
  console.log(city);
  getApi();
});
////////////////////////////DATE////////
const DATE_OBJ = new Date();
let dateHtml = document.querySelector(".date");
let hourHmtl = document.querySelector(".hours");

let fullDate = DATE_OBJ.toLocaleString("fr-FR", {
  day: "numeric",
  weekday: "long",
  month: "long",
});

let hour = DATE_OBJ.toLocaleString("fr-FR", {
  hour: "numeric",
  minute: "numeric",
});

/// innerHTML DATE //
hourHmtl.innerHTML = hour;
dateHtml.innerHTML = fullDate;
/////////////// FIN //////////////////
