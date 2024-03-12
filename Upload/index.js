const express = require('express');
// require('./config')
const multer = require('multer')

const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"uploads")
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname + "-" +Date.now() + ".jpg")
        }
    })
}).single("file-Img");




app.post('/abc',upload ,(req,resp) => {
    console.log("hii")
    resp.send("file upload");

});

app.listen(6000);

