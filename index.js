// // javascript

// d3.select();
// d3.selectAll();
// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Update it');
// d3.select('body').append('p').text('First Paragraph');

// // คำสั่ง select คือการเลือกและ append คือการบอกว่าเอาแบบที่เป็น paragraph และ text คือข้อความที่ต้องการให้แสดง



var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p') //appends paragraph for each data element
    .text('D3 is awesome!!');

    // // .text (function(d) {
    //     return d3;
    // });

