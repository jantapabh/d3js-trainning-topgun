var dataset = [28, 40, 56, 50, 75, 90, 120, 120, 100];
var chartWidth = 500, chartHeight = 300, barPadding = 5;
var barWidth = (chartWidth / dataset.length);
var svg = d3.select('svg')
    .attr("width", chartWidth)
    .attr("height", chartHeight);
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        return chartHeight - d
    })
    .attr("height", function (d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("fill", '#F2BF23')
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate +") ";
    });

    var text = svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d) {
return d;
})
.attr("y", function(d, i) {
return chartHeight - d - 2;
})
.attr("x", function(d, i) {
return barWidth * i + 10;
})
.attr("fill", "#A64C38");