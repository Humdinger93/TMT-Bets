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

//Part 2: CSV to JSON
//credit: stavck overflow user "Paath" on 2016-05-07

//initilize variables
let arrayOne = rawData.split("\r\n");
let header = arrayOne[0].split(",");
let nOfRow = arrayOne.length;
let noOfCol = header.length;
let jsonData = [];
let i = 0;
let j = 0;

//for loop rows
for (i=1;i < nOfRow - 1; i++) {
    let obj = [];
    let myNewLine = arrayOne[i].split(",");
        //nested loop for columns
        for (j = 0; j < noOfCol; j++) {
            obj[header[j]] = myNewLine[j];
        };
        //generate json
        jsonData.push(obj);
};


}
//publish data
document.getElementById("json").innerHTML =jsonData;

//Developer info
console.log(jsonData);
console.table(jsonData);
console.log("jsonData type: " +typeof jsonData);

//stringify
jsonString= JSON.stringify(jsonData);
console.log(jsonString);
console.log("jsonString type: " +typeof jsonString);



//call funciton
getData();