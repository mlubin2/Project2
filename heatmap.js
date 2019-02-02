var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 4
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var url = "http://127.0.0.1:5000/api/v1.0/fooddesert/south";

d3.json(url, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var w = response[i];

    
      heatArray.push([w.INTPTLAT, w.INTPTLONG,w.MedianFamilyIncome]);
      
      
  }
  /*var heat = L.heatLayer(heatArray,{
    maxZoom: 3,
    radius:3,
    blur: 10,
    max:500000,
    gradient: {0: 'lime', .5:'yellow', 1:'red'}
  }).addTo(myMap);*/
  console.log("about to build");
  
var heat = L.heatLayer(heatArray, {
    maxZoom:1,
    radius:1,
    blur: 1,
    max:100000,
    gradient: {.5: 'blue', .8:'lime', 1:'red'}
}).addTo(myMap);

console.log(response[3].LAPOP05_10);
 

});
