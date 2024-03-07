// HTTP handles server request and response 
//haper text transper protocal

const http = require('http');

http.createServer((req,resp) => {
    resp.write("hey i am adi ");
    resp.write("hellllllllllllllllll_____________________0");
    resp.end();
}).listen(4500);
