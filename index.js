// const data = require('./data');
// const http = require('http');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

// http.createServer((req,resp) => {
// resp.writeHead(200,{'Content-Type': 'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(5000);

const input = process.argv;

// creating new files 

// if(input[2]=="add"){
// fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=="remove"){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid syntax")
// }


//creating multiple files

for(let i=0;i<5;i++){

    // fs.writeFileSync('hello '+i+'.txt','my hello file');
    // fs.unlinkSync('hello '+i+'.txt');
    fs.writeFileSync(dirPath+'/hello '+i+'.txt','my hello file');
    // fs.unlinkSync(dirPath+'/hello '+i+'.txt');


}

fs.readdir(dirPath,(err,file)=>{
    file.forEach((element) => {
        console.log("file name is"+element)
    });

})

console.log(dirPath)