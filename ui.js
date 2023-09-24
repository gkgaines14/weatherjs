class UI {
    constructor(){

        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.high_low = document.getElementById('w-high_low')
        this.wind = document.getElementById('w-wind')

    }

    paint(weather,state){
        this.location.textContent =`${weather.name}, ${state}`
        this.desc.textContent = `${weather.weather[0].main} (${weather.weather[0].description})`
        this.string.textContent = `${weather.main.temp.toFixed(0)} F`
        this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`) 
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed(0)} F`
        this.high_low.textContent = `High/Low: ${weather.main.temp_max.toFixed(0)}/${weather.main.temp_min.toFixed(0)}`
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} MPH`

    }

}