// data source

const url ="https://raw.githubusercontent.com/Humdinger93/TMT-Bets/main/Data/CFB-FCS-Week-3-data.csv";


// get data function 

async function getData() {
//part 1 get csv

//fetch data
const response = await fetch(url);
//process data
const rawData = await response.text();
//publish data
document.getElementById("csv").innerHTML = rawData;

//developer info
console.log(rawData);
console.log("rawData type: " + typeof rawData);
}



//call funciton
getData();