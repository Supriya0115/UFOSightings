
// Date Acquisition Functionality
var date_I = d3.select("#datetime");
var submit = d3.select("#search");
var city_I = d3.select("#city")
var state_I = d3.select("#state")
var country_I = d3.select("#country")
var shape_I = d3.select("#shape")

// Bring data from data.js

var ufoData = data;

// get table references
var tableBody = d3.select("tbody");

function buildTable(data) {
  // clear out any existing data
  tableBody.html("");

  // loop through each object in the data
  // append a row and cells for each value in the row
  data.forEach((ufoSighting) => {
    // Append a row to the table body
    var ufoEntry = tableBody.append("tr");

     // loop through each field and add each values as a table cell 
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = ufoEntry.append("td");
        cell.text(value);
      }
    );
  });
}

function handleClick() {

// Search Functionality


  // Define variables for user inputs and table elements
 // Select the input element and get the raw HTML node


  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Get the value property of the input element
  var date_V = date_I.property("value");
  var city_V = city_I.property("value").trim().toLowerCase();
  var state_V = state_I.property("value").trim().toLowerCase();
  var country_V = country_I.property("value").trim().toLowerCase();
  var shape_V = shape_I.property("value").trim().toLowerCase();

  // ufoData is replaced by filtered data
  var filteredData = ufoData;

  // if(date_V != ""){
  //   var filteredData = ufoData.filter(function(inputval){
  //         return inputval.datetime === date_V
  //   })

  
  if (date_V) {    
    var filteredData = ufoData.filter(ufoEntry => ufoEntry.datetime === date_V);
    console.log(filteredData);
  }

  if (city_V) {    
    var filteredData = ufoData.filter(ufoEntry => ufoEntry.city === city_V);
    console.log(filteredData);
  }

  if (state_V) {    
    var filteredData = ufoData.filter(ufoEntry => ufoEntry.state === state_V);
    console.log(filteredData);
  }

  if (shape_V) {    
    var filteredData = ufoData.filter(ufoEntry => ufoEntry.shape === shape_V);
    console.log(filteredData);
  }

  // use the filtered data to build the table again
  buildTable(filteredData);
}

// Reset functionality after the search

function resetAll() {

  var filteredData = ufoData;
  date_I.value ="";
  city_I.value ="";
  state_I.value ="";
  country_I.value ="";
  shape_I.value ="";

  buildTable(filteredData);

}

// Attach an event to listen for the form button
d3.selectAll("#search").on("click", handleClick);
d3.selectAll("#reset").on("click", resetAll);

// Build the table when the page loads
buildTable(ufoData);