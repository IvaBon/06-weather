//once search button is clicked, 
// the forecast of the city shows
// and the city is saved under the search bar waiting to be clicked again

var button=$('button');

var cityInfo=[];

// function instructer provided to create dynamical html easier
function addToDOM(tag, content, appendTo){
    const elem = document.createElement(tag);
    elem.textContent = content;
    document.querySelector(appendTo).appendChild(elem);
}
  
function createForecast(){

}








button.on('click', function(){
    var input=document.getElementById('text').value;
    cityInfo.push(input)
    // forecast function
    // function to put cites searched on the side 
})
    
console.log(cityInfo)