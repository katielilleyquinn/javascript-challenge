// from data.js
var tableData = data;
var tbody = d3.select("tbody");



data.forEach(element => {
    // console.log(element);
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key,value])=> {
    console.log(key,value); 
    var cell = row.append("td");
    cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {

    tbody.html("");
    var input = d3.select("#datetime");
    var inputvalues = input.property("value");
    console.log(inputvalues);
    var newData = tableData.filter(sighting => sighting.datetime === inputvalues);
    console.log(newData);

    newData.forEach(function(selections) {
        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });

    });
});
