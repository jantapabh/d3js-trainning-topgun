const axios = require("axios");
const url = "http://35.194.179.37:5000/api/pm?fbclid=IwAR3Yzg2xZBB3TXgGSSw_DmXt8aIdlru44N_F1oISXfpxiaiDZelNNsYxXf4";

// ดึงข้อมูล pm 2.5 มาจาก api

async function getPm(pmData) {

    const result = [];
    const pm = [];
    const response = await axios.get(url);
    const data = response.data;

    for (let i = data.length - 1; i >= 1; i--) {

        const pmData = data[i].pm;
        const timeData = data[i]["Timestamp"];
        const arrData = timeData.split('T');
        // const test = arrData.split(',');


        result.push(timeData);
        pm.push(pmData);

    }

    // console.log(result.length);

    return { result, pm }
}





// async function parseData(pm) {

//     const arr = [];

//     for (let i = 0; i < pmData.length; i++) {

//         arr.push({

//             date: new Date(i),
//             value: + pm[i]
//         });
//     }

//     return arr;

// }


function drawChart(pm) {

    var svgWidth = 600, svgHeight = 400;
    var margin = {

        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    };

    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
        .rangeRound([0, width]);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    var line = d3.line()
        .x(function (d) {
            return x(d.result)
        })
        .y(function (d) {
            return y(d.pmData)
        })
    x.domain(d3.extent(pm, function (d) {
        return d.result
    }));
    y.domain(d3.extent(pm, function (d) {
        return d.pmData
    }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

        g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price ($)");

        g.append("path")
        .datum(pm)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecao", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);

}


async function main() {
    const pm = await getPm(url);
    // const line = await parseData(pm);
    const chart = await drawChart(pm);

}

main();