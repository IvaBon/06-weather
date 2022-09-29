//once search button is clicked, 
// the forecast of the city shows
// and the city is saved under the search bar waiting to be clicked again
var main=$('main');
var button=$('button');
let city=document.getElementById('fillcity');
let today=moment().format('l');
let tmr=moment().add(1,'days').format('l');
let tmr2=moment().add(2,'days').format('l');
let tmr3=moment().add(3,'days').format('l');
let tmr4=moment().add(4,'days').format('l');
let tmr5=moment().add(5,'days').format('l');
var input=document.getElementById('text').value;
var random=[];



function getApi(){
    
    var input=document.getElementById('text').value;
    var newvalue=[];
    
    let api='cb3d6881c21945a5b7f3e19679beda75'
    let cityName='';
    if(!input){
        cityName=random;
    } else {
        cityName=input;
    }
    
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
        //  console.log(weatherDays)
        })
        let title=document.getElementById('fillforecast')
        title.textContent='5 Day Forecast:'
        
        let date=document.getElementById('date1')
        let date2=document.getElementById('date2')
        let date3=document.getElementById('date3')
        let date4=document.getElementById('date4')
        let date5=document.getElementById('date5')

        let temp1=document.getElementById('temp1')
        let temp2=document.getElementById('temp2')
        let temp3=document.getElementById('temp3')
        let temp4=document.getElementById('temp4')
        let temp5=document.getElementById('temp5')
        let realTemp1=((weatherDays[0].main.temp-273.15)*1.8)+32;
        let realTemp2=((weatherDays[1].main.temp-273.15)*1.8)+32;
        let realTemp3=((weatherDays[2].main.temp-273.15)*1.8)+32;
        let realTemp4=((weatherDays[3].main.temp-273.15)*1.8)+32;
        let realTemp5=((weatherDays[4].main.temp-273.15)*1.8)+32;

        let wind1=document.getElementById('wind1')
        let wind2=document.getElementById('wind2')
        let wind3=document.getElementById('wind3')
        let wind4=document.getElementById('wind4')
        let wind5=document.getElementById('wind5')

        let humidity1=document.getElementById('humidity1')
        let humidity2=document.getElementById('humidity2')
        let humidity3=document.getElementById('humidity3')
        let humidity4=document.getElementById('humidity4')
        let humidity5=document.getElementById('humidity5')

        date.textContent=tmr;
        date2.textContent=tmr2;
        date3.textContent=tmr3;
        date4.textContent=tmr4;
        date5.textContent=tmr5;

        temp1.textContent=('Temp: '+ realTemp1.toFixed(2)+"°F")
        temp2.textContent=('Temp: '+ realTemp2.toFixed(2)+"°F")
        temp3.textContent=('Temp: '+ realTemp3.toFixed(2)+"°F")
        temp4.textContent=('Temp: '+ realTemp4.toFixed(2)+"°F")
        temp5.textContent=('Temp: '+ realTemp5.toFixed(2)+"°F")

        wind1.textContent=("Wind: " + weatherDays[0].wind.speed+ "MPH");
        wind2.textContent=("Wind: " + weatherDays[1].wind.speed+ "MPH");
        wind3.textContent=("Wind: " + weatherDays[2].wind.speed+ "MPH");
        wind4.textContent=("Wind: " + weatherDays[3].wind.speed+ "MPH");
        wind5.textContent=("Wind: " + weatherDays[4].wind.speed+ "MPH");

        humidity1.textContent=("Humidity: " + weatherDays[0].main.humidity+"%");
        humidity2.textContent=("Humidity: " + weatherDays[1].main.humidity+"%");
        humidity3.textContent=("Humidity: " + weatherDays[2].main.humidity+"%");
        humidity4.textContent=("Humidity: " + weatherDays[3].main.humidity+"%");
        humidity5.textContent=("Humidity: " + weatherDays[4].main.humidity+"%");

        
        
        

        
    })
    
}





button.on('click', function(){

    getApi()
    var items=[];
    let input=document.getElementById('text').value;
    input.replaceAll("",);
        localStorage.setItem('city',(input))
        console.log[items]
        
        
        for(var i=0; i< localStorage.length;i++){
            items.push(localStorage)
            
            let body=document.getElementById('append');
            let newvalue=document.createElement("button");
            
            body.append(newvalue);
            newvalue.setAttribute('class', 'newButton')
            newvalue.setAttribute('id', 'newB')
            newvalue.setAttribute('type', 'button')
            
            newvalue.textContent=localStorage.getItem('city')
            console.log(newvalue)
            newvalue.addEventListener('click',function(event){
                event.preventDefault();
                var newvalue=document.getElementById('newB').textContent;
                newvalue.replaceAll('',);
                random.push(newvalue)   
                console.log(random)        
                getApi()
                
            })
            
            
        }
        
    // setCity();
    // pullText();

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
  