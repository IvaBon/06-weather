//once search button is clicked, 
// the forecast of the city shows
// and the city is saved under the search bar waiting to be clicked again
var main=$('main');
var button=$('button');
let city=document.getElementById('fillcity');
let today=moment().format('l');
console.log(today)

function getApi(){
    var input=document.getElementById('text').value;
    let api='cb3d6881c21945a5b7f3e19679beda75'
    let cityName= input
    var requestUrl=`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api}`
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        let city=document.getElementById('fillcity');
        var temp=((data.list[0].main.temp-273.15)*1.8)+32;
        var realTemp=document.getElementById('temp');
        let wind=document.getElementById('wind');
        let humidity=document.getElementById('humidity');
        city.textContent=(data.city.name  + today );
        realTemp.textContent=("Temp: " + temp.toFixed(2) +"°F");
        wind.textContent=("Wind: " + data.list[0].wind.speed+ "MPH");
        humidity.textContent=("Humidity: " + data.list[0].main.humidity+"%");

        // THIS CODE WAS GIVEN BY INSTRUCTER
        const weatherDays = []  
        let currDay = null

        data.list.forEach( function(tsObj){

         // Makes a moment date object for each record
         const dateObj = moment.unix(tsObj.dt)

         // Generate the day # for the day in the date object
         const dateNum = dateObj.format("DDD")

         // If the current date in tsObj hasn't had a record put into weatherDays, do that now 
         // Then skip over all other records for this day
         if( dateNum !== currDay && weatherDays.length < 5 ){
             weatherDays.push( tsObj )
             currDay = dateNum
          }
         console.log(weatherDays)
        })
    })
    .then(function(data){
        let title=document.getElementById('fillforecast')
        title.textContent='5 Day Forecast:'
        
    

    })
    .then(function(data){
      
        

    })
}

function getWeatherDays(){
    
}




function createForecastPage(){
    
}


function cityOnSide(){
    for(var i=0;i<input.length;i++){
     var cities=input[i];
     addToDOM()
    }
}







button.on('click', function(){
    getApi()
  
    
    // // forecast function
    // // function to put cites searched on the side 
    // console.log(cityInfo)
})
  // function instructer provided to create dynamical html easier  
function addToDOM(tag, content, appendTo){
    const elem = document.createElement(tag);
    elem.textContent = content;
    document.querySelector(appendTo).appendChild(elem);
}
  