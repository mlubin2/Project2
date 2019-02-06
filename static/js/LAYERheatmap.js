var myMap1 = L.map("map1", {
  center: [37.7749, -122.4194],
  zoom: 4
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap1);
function markerSize(population) {
    return population;
  }
var url = "http://127.0.0.1:5000/api/v1.0/fooddesert/south";

 
d3.json(url, function(response) {

  //console.log(response);
  var heatArray1 = [];
  var heatArray = [];
  var oneandtwenty = [];
  var LowTractMarker = [];
  var LowTractMarkers = [];
  var populationarray = [];
  var populationlayer = [];
  for (var i = 0; i < response.length; i++) {
    var w = response[i];
    
    
      heatArray.push([w.INTPTLAT, w.INTPTLONG,w.PovertyRate]);
      
      oneandtwenty.push(
        L.circle([w.INTPTLAT, w.INTPTLONG], {
          stroke: false,
          fillOpacity: 0.75,
          color: "black",
          fillColor: "black",
          radius: markerSize(w.LA1and20/3)
        })
      );
        LowTractMarkers.push(
            L.circle([w.INTPTLAT, w.INTPTLONG], {
              stroke: false,
              fillOpacity: 0.75,
              color: "pink",
              fillColor: "pink",
              radius: markerSize(w.LAhalfand10)
            })
      );
      populationarray.push(
        L.circle([w.INTPTLAT, w.INTPTLONG], {
          stroke: false,
          fillOpacity: 0.05,
          color: "yellow",
          fillColor: "yellow",
          radius: markerSize(w.POP2010*3)
        })
      );
    
      // Setting the marker radius for the city by passing population into the markerSize function
      
     
      
  }
  /*var heat = L.heatLayer(heatArray,{
    maxZoom: 3,
    radius:3,
    blur: 10,
    max:500000,
    gradient: {0: 'lime', .5:'yellow', 1:'red'}
  }).addTo(myMap1);*/
  console.log("about to build");
  
var heat = L.heatLayer(heatArray, {
    maxZoom:10,
    radius:3,
    blur: 1,
    max:100,
    gradient: {.2: 'lime', .5:'yellow', 1:'red'}
}).addTo(myMap1);

console.log(response[3].LAPOP05_10);



var oneandtwentylayer = L.layerGroup(oneandtwenty);

var LowTractMarker = L.layerGroup(LowTractMarkers);


var populationlayer = L.layerGroup(populationarray);
// Create an overlay object
var overlayMaps = {
  
  
};
var overlaymetrics = {
  
  "Population": populationlayer,
  "Low Tract 1 and 20": oneandtwentylayer,
  "Low Tract .5 and 10": LowTractMarker
  
}
// Define a map object
/*var myMap1 = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [oneandtwentylayer]
});
*/
// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(overlayMaps,overlaymetrics
).addTo(myMap1);
 

});
