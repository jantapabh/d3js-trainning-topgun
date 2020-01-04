const axios = require("axios");
const url = "http://35.194.179.37:5000/api/pm?fbclid=IwAR3Yzg2xZBB3TXgGSSw_DmXt8aIdlru44N_F1oISXfpxiaiDZelNNsYxXf4";



// ดึงข้อมูล pm 2.5 มาจาก api

async function getPm(pmData) {

    const result = [];
    const response = await axios.get(url);
    const data = response.data;

    for (let i = data.length - 1; i >= 1; i--) {

        const pmData = data[i].pm;
        const timeData = data[i]["Timestamp"];
        const arrData = timeData.split('T');
        const timeD = arrData.slice(0);


        result.push(arrData,pmData);

    }

    console.log(result);

    // console.log(result.length);

    return result;

}

getPm();