
const apiKey = 'dbd964e4d3293ab8ff36e7e552118076'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector("#search input")
const searchBtn = document.querySelector("#search button")
const weatherIcon = document.querySelector(".weather-icon")

async function fetchWeatherData(city){
    let raw = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await raw.json();
    console.log(data);
    if(raw.status === 404){
        document.querySelector(".error").style.display="block";
        document.querySelector("#weatherConditions").style.display="none";
        
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else  if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else  if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else  if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else  if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        
        document.querySelector("#weatherConditions").style.display="flex";
    }
   

}
}
searchBtn.addEventListener("click",()=>{
    fetchWeatherData(searchBox.value);
})