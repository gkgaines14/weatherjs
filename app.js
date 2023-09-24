// const { UI } = require("winjs")

//Init storage
const storage = new Storage()

const weatherLocation = storage.getLocationData()

//Init weather object
const weather = new Weather(weatherLocation.city,weatherLocation.state)

//Init weather on Dom Load
const ui = new UI()

//Get weather on dom load

document.addEventListener('DOMContentLoaded',getWeather)


//Change Location event

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value

    weather.changeLocation(city,state)

    //Set location to local storage
    storage.setLocationData(city,state)

    getWeather()

    //Close modal
    // $('#locModal').modal('hide')
})


function getWeather(){
    weather.getWeather()
        .then(results=>{
            console.log(results)
            ui.paint(results,weather.state)
        })
        .catch(err =>console.log(err))
}