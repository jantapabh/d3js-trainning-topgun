// javascript

var data = [
    { "platform": "Android", "percentage": 40.11 },
    { "platform": "Windows", "percentage": 36.69 },
    { "platform": "ioS", "percentage": 13.06 }
];

var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);


   //Create group elemexts to hold pie chart
   
   var g = d3.scaleOrdinal(d3.schemeCategory10);

   var pie = d3.pie().value(function(d) {
       return d.percentage;
   });

   var path = d3.arc()
   .outerRadius(radius)
   .innerRadius(0);