// Creating map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
});
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

//Store API query variables
var baseURL = "/api/v1.0/fooddesert/";
var northeastregion = "northeast";
var southregion = "south";
var midwestregion = "midwest";
var westregion = "west";
var otherregion = "1";


// Assemble API query URL
var urlne = baseURL + northeastregion;
var urls = baseURL + southregion;
var urlmw = baseURL + midwestregion;
var urlw = baseURL + westregion;
var urlo = baseURL + otherregion;

// Grab the data with d3 - urlo
d3.json(urlo, function(response) {
  
// Create a new marker cluster group
var markers = L.markerClusterGroup();
var heatArray = [];
// Loop through data
for (var i = 0; i < response.length; i++) {

  // Set the data location property to a variable
  var location = response[i];
  
  // Check for location property
  if (location) {
    
    
    heatArray.push([location.INTPTLAT, location.INTPTLONG,location.PovertyRate*.75],)
    // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
      .bindPopup( location.PovertyRate));
      

  }
  myMap.addLayer(markers);

}
// Grab the data with d3 - urlne
d3.json(urlne, function(response) {

  // Create a new marker cluster group
  var markers2 = L.markerClusterGroup();
  
  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];

    // Check for location property
    if (location) {
      heatArray.push([location.INTPTLAT, location.INTPTLONG,location.PovertyRate*.75],)
      // Add a new marker to the cluster group and bind a pop-up
      markers2.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
        .bindPopup(response[i].PovertyRate));
    }
  // Add our marker cluster layer to the map
  myMap.addLayer(markers2);
  }  



// Grab the data with d3 - urlne
d3.json(urls, function(response) {

  // Create a new marker cluster group
  var markers3 = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];

    // Check for location property
    if (location) {
      heatArray.push([location.INTPTLAT, location.INTPTLONG,location.PovertyRate*.75],)
      // Add a new marker to the cluster group and bind a pop-up
      markers3.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
        .bindPopup(response[i].PovertyRate));
    }
  // Add our marker cluster layer to the map
  myMap.addLayer(markers3);
  }  



// Grab the data with d3 - urlne
d3.json(urlmw, function(response) {

  // Create a new marker cluster group
  var markers4 = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];

    // Check for location property
    if (location) {
      heatArray.push([location.INTPTLAT, location.INTPTLONG,location.PovertyRate*.75],)  
      // Add a new marker to the cluster group and bind a pop-up
      markers4.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
        .bindPopup(response[i].PovertyRate));
    }
  // Add our marker cluster layer to the map
  myMap.addLayer(markers4);
  }  



// Grab the data with d3 - urlne
d3.json(urlw, function(response) {

  // Create a new marker cluster group
  var markers5 = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];

    // Check for location property
    if (location) {
      heatArray.push([location.INTPTLAT, location.INTPTLONG,location.PovertyRate*.75],)
      // Add a new marker to the cluster group and bind a pop-up
      markers5.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
        .bindPopup(response[i].PovertyRate));
    }
  // Add our marker cluster layer to the map
  myMap.addLayer(markers5);

  }  
  var heat =  L.heatLayer(heatArray, {
    radius: 40,
    maxZoom: 4,
    blur: 35,
    max : 25,
    gradient:{.15: 'green', .35: 'yellow', .7: 'red'}
  }).addTo(myMap);
  
//   var baseLayers = {
//     "Streets": [streets]
// };
// // Adding tile layer to the map
// var overlays= {
//   "Population HeatMap" : [heatArray]
// };

// L.control.layers(baseLayers, overlays);  
})})})})});