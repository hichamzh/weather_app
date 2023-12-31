const API_KEY = "45d4e6581a142d8f01ce6cc12138c644";
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
  let imgList = document.querySelectorAll(".img_temp");

  imgList.forEach((img) => {
    switch (data.weather[0].main) {
      case "Drizzle":
        img.src = "./img/bruine.png";
        break;
      case "Clear":
        img.src = "./img/clear.png";
        break;
      case "Clouds":
        img.src = "./img/cloud.png";
        break;
      case "Mist":
        img.src = "./img/mist.png";
        break;
      case "Rain":
        img.src = "./img/rain.png";
        break;
      case "Snow":
        img.src = "./img/snow.png";
        break;
      default:
        img.src = "";
        break;
    }
    if (data.weather[0].main === "Clear") {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });

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
