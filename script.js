const weather = document.querySelector('.weather')
const img = document.querySelector('.img')
const key = `c5309e3bac826533f8d26b7c2bb5ea0e`
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos) =>{
        const lat = pos.coords.latitude
        const long = pos.coords.longitude
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
        fetch(url).then(res => res.json()).then(data =>{
            
            const icon = data.weather[0].icon
            const temperature = data.main.temp -273
            const description = data.weather[0].description
             const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
         const location = data.name


            const markup = `
            <h2> current weather </h2>
            <img src=${iconUrl} alt="cloudy">
            <h2 class = 'desc'>${description}</h2>
            <p>Tempatures in <b>${location}</b> is currently at  <b>${Math.floor(temperature)}℃ </b></p>
            `
        
            
            weather.innerHTML= markup
            
            
        } )
    
    })
}

weather.textContent = 'Couldnt find location'



// const lat =  //pos.coords.latitude
//const long = //pos.coords.longitude