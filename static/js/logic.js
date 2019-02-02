// Creating map object
var myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Store API query variables
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
  
  // Grab the data with d3
  d3.json(urlo, function(response) {
  
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();
  
    // Loop through data
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable
      var location = response[i];
  
      // Check for location property
      if (location) {
  
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([location.INTPTLAT, location.INTPTLONG])
          .bindPopup(response[i].PovertyRate));
      }
  
    }
  
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  
  });
  