var wallawalla;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
//var city = "Los Angeles";
var apikey = "&APPID=d5afccd0a010330873f477846a4dde3a";
var units = "&units=imperial";

var input;

function setup() {
    // put setup code here
 createCanvas(400, 400);
    
//    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d5afccd0a010330873f477846a4dde3a&units=imperial', gotData);
    var button = select('#submit');
    button.mousePressed(askWeather);
    
    input = select('#city');
    
   
}

function askWeather(){
//    var url = api + city + apikey + units;
    var url = api + input.value() + apikey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    //    println(data);
    wallawalla = data;
}

function draw() {
    // put drawing code here
    background(0);
    if (wallawalla) {
        fill(255);
        var rainbow = wallawalla.main;
        ellipse(10, 10, 10, 10);
//                text(round(rainbow.temp), 10, 10);
        ellipse(100, 200, round(rainbow.temp), round(rainbow.temp)); 
        ellipse(200, 200, round(rainbow.humidity), round(rainbow.humidity));
    }
}
