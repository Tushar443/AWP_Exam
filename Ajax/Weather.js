function Find(){
    let cityName=document.querySelector('#input_text').value;

    let xhr=new XMLHttpRequest();

xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?appid=6bd8fa0376f0b5c61d97fc17fa2eccbd&units=metric&q='+cityName);
xhr.onload=()=>{
    let data =JSON.parse(xhr.responseText);
    console.log(data);
    PrintCity(data);
};

xhr.send();
}

function PrintCity(city_info){
    let cityName=city_info.name;
    let city_temp_max=city_info.main.temp_max;
    let city_temp_min=city_info.main.temp_min;
    let parent = document.querySelector('#parent');

    let newElement=parent.children[0].cloneNode(true);

    newElement.innerHTML='City Name :- '+cityName+' ' +'MAX_TEMP :- '+ city_temp_max + ' '+'MIN_TEMP :- '+city_temp_min;

    parent.insertBefore(newElement,parent.firstChild);    
}




//API KEY ==> 6bd8fa0376f0b5c61d97fc17fa2eccbd

//weather ==>  api.openweathermap.org/data/2.5/weather?id=mumbai&appid=6bd8fa0376f0b5c61d97fc17fa2eccbd