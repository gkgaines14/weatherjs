class Weather{
    constructor(city,state) {
        this.apiKey = '52b61f6d6b59a670e711945b831ceee9'
        this.city = city
        this.state = state
    }   


    //Fetch weather from API
    async getWeather(){
        
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},US&units=imperial&appid=52b61f6d6b59a670e711945b831ceee9`)
        
        const responseData = await response.json()
    
        return responseData//.current_observation
    }

    //Change weather location
    changeLocation(city,state){
        this.city = city
        this.state = state
    }
}