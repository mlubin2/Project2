// Creating map object

var myMap = L.map("map",  {
  layers: street,
  center: [37.09, -95.71],
  zoom: 4
});

var street = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
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
var heatlow0510 = [];
var heatlow120 = [];
var heatvehicle= [];
var heatsnap= [];
// Loop through data
for (var i = 0; i < response.length; i++) {

  // Set the data location property to a variable
  var location = response[i];
  
  // Check for location property
  if (location) {
    heatsnap.push([location.INTPTLAT, location.INTPTLONG,location.TractSNAP],)
    heatvehicle.push([location.INTPTLAT, location.INTPTLONG,location.TractHUNV],)
    heatlow120.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI1_20],)
    heatlow0510.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI05_10],)
    // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
    .bindPopup("There are "+String(location.POP2010 )+ " people living in this area.<br />The median family income is: "+String(location.MedianFamilyIncome)+"<br />"+String(location.TractLOWI)+ " are low-income individuals.<br />"+String(location.TractSNAP)+" receive SNAPS.<br />"+String(location.TractHUNV)+" households do not have a vehicle."));
      

  }
  //myMap.addLayer(markers);

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
      heatsnap.push([location.INTPTLAT, location.INTPTLONG,location.TractSNAP],)
      heatvehicle.push([location.INTPTLAT, location.INTPTLONG,location.TractHUNV],)
      heatlow120.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI1_20],)
      heatlow0510.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI05_10],)
      // Add a new marker to the cluster group and bind a pop-up
      markers2.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
      .bindPopup("There are "+String(location.POP2010 )+ " people living in this area.<br />The median family income is: "+String(location.MedianFamilyIncome)+"<br />"+String(location.TractLOWI)+ " are low-income individuals.<br />"+String(location.TractSNAP )+" receive SNAPS.<br />"+String(location.TractHUNV)+" households do not have a vehicle."));
    }
  // Add our marker cluster layer to the map
  //myMap.addLayer(markers2);
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
      heatsnap.push([location.INTPTLAT, location.INTPTLONG,location.TractSNAP],)
      heatvehicle.push([location.INTPTLAT, location.INTPTLONG,location.TractHUNV],)
      heatlow120.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI1_20],)
      heatlow0510.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI05_10],)
      // Add a new marker to the cluster group and bind a pop-up
      markers3.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
      .bindPopup("There are "+String(location.POP2010 )+ " people living in this area.<br />The median family income is: "+String(location.MedianFamilyIncome)+"<br />"+String(location.TractLOWI)+ " are low-income individuals.<br />"+String(location.TractSNAP )+" receive SNAPS.<br />"+String(location.TractHUNV)+" households do not have a vehicle."));
    }
  // Add our marker cluster layer to the map
  //myMap.addLayer(markers3);
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
      heatsnap.push([location.INTPTLAT, location.INTPTLONG,location.TractSNAP],)
      heatvehicle.push([location.INTPTLAT, location.INTPTLONG,location.TractHUNV],)
      heatlow120.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI1_20],)
      heatlow0510.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI05_10],)  
      // Add a new marker to the cluster group and bind a pop-up
      markers4.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
      .bindPopup("There are "+String(location.POP2010 )+ " people living in this area.<br />The median family income is: "+String(location.MedianFamilyIncome)+"<br />"+String(location.TractLOWI)+ " are low-income individuals.<br />"+String(location.TractSNAP )+" receive SNAPS.<br />"+String(location.TractHUNV)+" households do not have a vehicle."));
    }
  // Add our marker cluster layer to the map
  //myMap.addLayer(markers4);
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
      heatsnap.push([location.INTPTLAT, location.INTPTLONG,location.TractSNAP],)
      heatvehicle.push([location.INTPTLAT, location.INTPTLONG,location.TractHUNV],)
      heatlow120.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI1_20],)
      heatlow0510.push([location.INTPTLAT, location.INTPTLONG,location.LALOWI05_10],)
      // Add a new marker to the cluster group and bind a pop-up
      markers5.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
      .bindPopup("There are "+String(location.POP2010 )+ " people living in this area.<br />The median family income is: "+String(location.MedianFamilyIncome)+"<br />"+String(location.TractLOWI)+ " are low-income individuals.<br />"+String(location.TractSNAP )+" receive SNAPS.<br />"+String(location.TractHUNV)+" households do not have a vehicle."));
    }
  // Add our marker cluster layer to the map
  //myMap.addLayer(markers5);

  }
  
  

  var clusterdata = [markers,markers2,markers3,markers4,markers5];
  var clusteroverlay = new L.LayerGroup(clusterdata);
  var heatlow0510overlay = new L.LayerGroup();
  var heatlow0120overlay = new L.LayerGroup();
  var heatvehicleoverlay = new L.LayerGroup();
  var heatsnapoverlay = new L.LayerGroup();
  heatsnapoverlay=  L.heatLayer(heatsnap, {
    radius: 20,
    maxZoom: 13,
    blur: 25,
    max : location.POP2010/10,
    gradient:{.25: 'green', .40: 'blue', .60: 'cyan'}
   });
  heatvehicleoverlay=  L.heatLayer(heatvehicle, {
    radius: 20,
    maxZoom: 13,
    blur: 25,
    max : location.POP2010/10,
    gradient:{.25: 'green', .40: 'blue', .60: 'purple'}
   });
  heatlow0120overlay=  L.heatLayer(heatlow120, {
    radius: 20,
    maxZoom: 13,
    blur: 25,
    max : 2000,
    gradient:{.25: 'yellow', .40: 'orange', .60: 'red'}
   });
  heatlow0510overlay=  L.heatLayer(heatlow0510, {
   radius: 20,
   maxZoom: 13,
   blur: 25,
   max : 2000,
   gradient:{.25: 'green', .40: 'yellow', .60: 'orange'}
  });
  L.layerGroup([street])
  var baseLayers = {
    //"Streets": street,
    
};
// Adding tile layer to the map
var overlays= {
  "Individuals 1/2 Mile Urban and/or <br \>10 Miles Rural from Supermarket" : heatlow0510overlay,
  "Individuals 1 Mile Urban and/or <br \>20 Miles Rural from Supermarket": heatlow0120overlay,
  "Households without a Vehicle" : heatvehicleoverlay,
  "Households Receiving SNAP Benefits" : heatsnapoverlay,
  "Marker Cluster" : clusteroverlay
};

L.control.layers(baseLayers, overlays).addTo(myMap);  


})})})})});