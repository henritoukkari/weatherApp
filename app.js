const apiKey = "6420f2c11322f8fa49f4dbf90c00fb7b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


// current time


function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

let now = new Date();
let hours = formatTime(now.getHours());
let minutes = formatTime(now.getMinutes());
let seconds = formatTime(now.getSeconds());




// Get current day

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
    const d = new Date();
    let day = d.getDay();
    document.querySelector('.current-hour').innerHTML = `${hours}:${minutes}`
    console.log(`${hours}:${minutes}`);
    

if(day === 0){
    document.querySelector('.current-day').innerHTML = "Sunday"
}else if(day === 1){
    document.querySelector('.current-day').innerHTML = "Monday"
}else if(day === 2){
    document.querySelector('.current-day').innerHTML = "Tuesday"
}else if(day === 3){
    document.querySelector('.current-day').innerHTML = "Wednesday"
}else if(day === 4){
    document.querySelector('.current-day').innerHTML = "Thursday"
}else if(day === 5){
    document.querySelector('.current-day').innerHTML = "Friday"
}else if(day === 6){
    document.querySelector('.current-day').innerHTML = "Saturday"
}


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="img/clouds.png";
    } else if (data.weather[0].main == "Clear"){
        weatherIcon.src="img/clear.png";
    } else if (data.weather[0].main == "Rain"){
        weatherIcon.src="img/rain.png"
    } else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src="img/drizzle.png"
    } else if (data.weather[0].main == "Mist"){ 
        weatherIcon.src="img/mist.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src="img/snow.png"
    }

    document.querySelector('.weather').style.display = "block";
    document.querySelector(".error").style.display = "none";

        }
    }

    
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
    console.log(searchBox.value);
    
})


searchBtn.addEventListener("keydown", ()=> {
    checkWeather(searchBox.value);
    console.log(searchBox.value);
})





