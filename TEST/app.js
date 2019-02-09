$.getJSON("fooddesertloc.json", function(sampleData) {
    $.each(sampleData, function (index, value) {
       console.log(value);
    });
});
var states = sampledata.State;
var householdsSNAP = sampledata.TractSNAP;

// Create the Trace
var trace1 = {
  x: states,
  y: householdsSNAP,
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Number of Households Receiving SNAP by State",
  xaxis: { title: "States" },
  yaxis: { title: "Households Receiving SNAP" }
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout)