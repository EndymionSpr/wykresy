/* const x = {};
x["here"]=["quesadsad"];
x["here"].push("1333");
console.log(x.here) */

let x1 = 200;
let x2 = 200;
const pro = 0.04

x1 = x1 + (x1*pro*15);

for (let i=0;i<15;i++){
    x2 += x2*pro;
}
console.log(x1);
console.log(x2);
console.log(x1/x2);