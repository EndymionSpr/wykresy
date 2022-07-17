const fs = require('fs');
const readline = require('readline');

const labels = ["SET", "GET", "INCR", "LPUSH", "RPUSH", "LPOP", "RPOP", "SADD", "HSET", "SPOP", "ZADD", "ZPOPMIN", "LRANGE_100", "LRANGE_300", "LRANGE_600", "MEST"];
const data1o = {};
const data2o = {};




const data1 = getData('./dataSets/dataLaptop.txt');
const fData1 = cleanData(data1);
console.log(fData1);

const data2 = getData('./dataSets/dataServer.txt');
const fData2 = cleanData(data2);
console.log(fData2);


function cleanData(data) {
  const obj = {};
  //const regex = /(\b requests per second\b)|(\\n)/g;
  data = data.replaceAll(/(\b requests per second\b)|(\n)/g, "");
  //data = data.replaceAll("\n","");
  const lines = data.split(/\n?\r/);

  for (let index = 0; index < lines.length; index++) {
    let linesTemp = lines[index].split(":")
    obj[linesTemp[0]] = linesTemp[1].replace(" ", "");

  }
  return obj;
}

function getData(fileName) {

  try {
    const data = fs.readFileSync(fileName, 'utf8');
    return data
  } catch (err) {
    console.error(err);
  }
}