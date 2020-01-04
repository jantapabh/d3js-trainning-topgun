// // javascript

// d3.select();
// d3.selectAll();
// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Update it');
// d3.select('body').append('p').text('First Paragraph');

// // คำสั่ง select คือการเลือกและ append คือการบอกว่าเอาแบบที่เป็น paragraph และ text คือข้อความที่ต้องการให้แสดง

// d3.axisTop()
// d3.axisRight()
// d3.axisBottom()
// d3.axisLeft()

var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var svgWidth = 500, svgHeight = 300;


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([svgHeight, 0]);

var x_axis = d3.axisBottom()
    .scale(xScale);
var y_axis = d3.axisLeft()
    .scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate +")")
    .call(x_axis);

// var barChart = svg.selectAll("rect")
// .data(dataset)
// .enter()
// .append("rect")
// .attr("y", function(d) {

//     return svgHeight - d
// })

// .attr("height", function(d) {
//     return d;
// })
// .attr("width", barWidth - barPadding)
// .attr("transform", function (d, i) {
//     var translate = [barWidth * i, 0];
//     return "translate("+ translate +")";
// });

// var text = svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text(function(d) {
//     return d;

// })

// .attr("y", function(d, i) {
//     return svgHeight - d - 2;

// })

// .attr("x", function(d, i) {
//     return barWidth * i;

// })

// .attr("fill", "#A64C38");

// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p') //appends paragraph for each data element
//     // .text('D3 is awesome!!');

//     .text(function (d) {
//         return d;
//     });

