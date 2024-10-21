
const fs = require("fs");
const http = require("http");

const result = Number(process.argv[2]) + Number(process.argv[3]);
fs.readFile("data.txt", (error, data) => {
    if(error){
        console.log("Bład!", error)
        return;
    }
    console.log(data.toString());
});
fs.writeFile("result.txt", result.toString(),(error, data) => {
    if(error){
        console.log("Bład!", error)
        return;
    }
})


