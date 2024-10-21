const process = require('process');
const fs = require('fs');
console.log("Hello from script running by node!");
console.log(Number(process.argv[2]) + Number(process.argv[3]));
fs.readFile("hello.js", (e,d) => {
    if (e){
        console.log("Error during reading file!");
        return -1;
    }
    console.log(d.toString());
});


