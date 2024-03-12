const express = require('express');
const getdata = require('./mongo_config');


const app = express();
app.use(express.json());

app.get('/',async(req,resp)=>{
    const data = await getdata();
    const result = await data.find().toArray();
    resp.send(result);
    console.log(result);
})


app.post('/',(req,resp)=>{
    console.log(req.body);
    resp.send(req.body)
})


app.listen(5000);