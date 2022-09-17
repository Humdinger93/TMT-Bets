// data source

const url ="https://raw.githubusercontent.com/julia4ta/tutorials/master/Series%2002/Files/population_by_year.csv";


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