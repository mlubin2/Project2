// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the .csv file
// =================================
d3.csv("fooddesertloc.csv", function(error, desertData) {
  if (error) throw error;

  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
 


  // Step 5: Create the scales for the chart
  // =================================
  var xincome = d3.domain(d3.extent(desertData, d => d.MediumFamilyIncome))
    .range([0, width]);

  var yLinearScale = d3.scaleLinear().range([height, 0]);

  // Step 6: Set up the y-axis domain
  // ==============================================
  // @NEW! determine the max y value
  // find the max of the snap data
  var snapMax = d3.max(desertData, d => d.TractSNAP);

  // find the max of the vehicle data
  var vehicleMax = d3.max(desertData, d => d.TractHUNV);

  var yMax;
  if (snapMax > vehicleMax) {
    yMax = snapMax;
  }
  else {
    yMax = vehicleMax;
  }

  // var yMax = snapMax > vehicleMax ? snapMax : vehicleMax;

  // Use the yMax value to set the yLinearScale domain
  yLinearScale.domain([0, yMax]);


  // Step 7: Create the axes
  // =================================
  var bottomAxis = d3.axisBottom(xincome);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 8: Append the axes to the chartGroup
  // ==============================================
  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y-axis
  chartGroup.append("g").call(leftAxis);

  // Step 9: Set up two line generators and append two SVG paths
  // ==============================================

  // Line generator for snap data
  var line1 = d3.line()
    .x(d => xincome(d.MediumFamilyIncome))
    .y(d => yLinearScale(d.snap));

  // Line generator for vehicle data
  var line2 = d3.line()
    .x(d => xincome(d.MediumFamilyIncome))
    .y(d => yLinearScale(d.vehicle));

  // Append a path for line1
  chartGroup
    .append("path")
    .attr("d", line1(desertData))
    .classed("line green", true);

  // Append a path for line2
  chartGroup
    .data([desertData])
    .append("path")
    .attr("d", line2)
    .classed("line orange", true);

});
