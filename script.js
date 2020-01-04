// var dataset = [2, 4, 5, 5, 7, 9, 12, 9, 10];
// var chartWidth = 500, chartHeight = 300, barPadding = 6;
// var barWidth = (chartWidth / dataset.length - 14);
// var svg = d3.select('svg')
//     .attr("width", chartWidth)
//     .attr("height", chartHeight);
// var xScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset)])
//     .range([0, chartWidth]);
// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset)])
//     .range([0, chartHeight - 28]);
// var yScaleChart = d3.scaleLinear()
//     .domain([0, d3.max(dataset)])
//     .range([chartHeight - 28, 0]);
// var barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function (d) {
//         return chartHeight - yScale(d) - 20;
//     })
//     .attr("height", function (d) {
//         return yScale(d);
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("fill", '#F2BF23')
//     .attr("transform", function (d, i) {
//         var translate = [barWidth * i + 55, 0];
//         return "translate(" + translate + ")";
//     });
// var text = svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text(function (d) {
//         return d;
//     })
//     .attr("y", function (d, i) {
//         return chartHeight - yScale(d) - 20;
//     })
//     .attr("x", function (d, i) {
//         return barWidth * i + 70;
//     })
//     .attr("fill", "#A64C38");
// var x_axis = d3.axisBottom().scale(xScale);
// var y_axis = d3.axisLeft().scale(yScaleChart);
// svg.append("g")
//     .attr("transform", "translate(50, 10) ")
//     .call(y_axis);
// var xAxisTranslate = chartHeight - 20;
// svg.append("g")
//     .attr("transform", "translate(50, " + xAxisTranslate +") ")
//     .call(x_axis);

