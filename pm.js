
const axios = require("axios");
const url = "http://35.194.179.37:5000/api/pm?fbclid=IwAR3Yzg2xZBB3TXgGSSw_DmXt8aIdlru44N_F1oISXfpxiaiDZelNNsYxXf4";
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// ดึงข้อมูล pm 2.5 มาจาก api

async function getPm(pmData) {
    const mainData = []
    const result = [];
    const time = [];
    const resultmix = [];
    const response = await axios.get(url);
    const data = response.data;

    for (let i = data.length - 1; i >= 1; i--) {

        const pmData = data[i].pm;
        const timeData = data[i]["Timestamp"];
        const arrData = timeData.split('T')[0];
        console.log(arrData)
        mainData.push({pm:pmData,date:arrData})
        // result.push(pmData);
        // time.push(arrData);
        
    }

    //การแปลงข้อมูลเป็นไฟล์ csv
    const csvWriter = createCsvWriter({
        path: 'out.csv',
        header: [
          {id: 'date', title: 'date'},
          {id: 'pm', title: 'pm'},
        ]
      });
      csvWriter
      .writeRecords(mainData)
      .then(()=> console.log('The CSV file was written successfully'));
       

    // console.log(result);
    // console.log(time);

    // console.log(resultmix[0]);

    // console.log(result.length);

    // return result;

}

async function main() {

    const pm = await getPm(url);

}

main();