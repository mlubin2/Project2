// Load data from csv
d3.csv("./fooddesertloc.csv", function(error, foodData) {
    if (error) return console.warn(error);
  
    console.log(foodData);
  
    // log a list of regions
    var regions = foodData.map(data => data.region);
    console.log("regions", regions);
  
    // Cast each tractSNAP value in foodData as a number using the unary + operator
    foodData.forEach(function(data) {
      data.tractSNAP = +data.tractSNAP;
      console.log("region:", data.region);
      console.log("tractSNAP:", data.tractSNAP);
    });
  });