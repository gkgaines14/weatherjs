class Storage{
    constructor(){
        this.city
        this.state
        this.defualtCity = 'Chicago'
        this.defualtState = 'IL'
    }


getLocationData(){

    if(localStorage.getItem('city')=== null){
        this.city = this.defualtCity
    }else{
        this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('state')=== null){
        this.state = this.defualtState
    }else{
        this.state = localStorage.getItem('state')
    }
    return {
        city:this.city,
        state:this.state
        }

}

setLocationData(city,state){
    localStorage.setItem('city',city)
    localStorage.setItem('state',state)

}



}