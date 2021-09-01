var dt = new Date();

document.querySelector('.date').innerHTML = dt.toLocaleDateString();
document.querySelector('.time').innerHTML = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();;


let weather = {
    apiKey: "4a4960f468564368df695033cc60becb",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" +
                this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        const {
            temp_min,
            temp_max
        } = data.main;
        const {
            country
        } = data.sys;
        const {
            timezone
        } = data.timezone


        console.log(name, icon, description, temp, humidity, speed, temp_min, temp_max);
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerHTML = temp;
        document.querySelector(".minTemp").innerHTML = temp_min + "°C";
        document.querySelector(".maxTemp").innerHTML = temp_max + "°C";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = humidity;
        document.querySelector(".windSpeed").innerHTML = speed;
        document.querySelector(".countryCode").innerHTML = ' , ' + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    },

    search: function() {
        this.fetchWeather(document.querySelector('.search-input').value);
    },

};

document.querySelector(".searchIcon").addEventListener('click', function() {
    weather.search();

});