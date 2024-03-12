const express = require('express');
require("./Config.js");
const products = require('./Products.js');

const app = express();
app.use(express.json());
   
app.post('/create', async(req,res) => {
    const data = new products(req.body);
    const result = await data.save();
    console.log(req.body);
    res.send(result);
})
app.get('/list', async(req,res) => {
    const data = await products.find();
    console.log(data);
    res.send(data);
})
app.delete('/delete/:_id', async(req,res) => {
    const data = await products.deleteOne(req.params);
    console.log(req.params);
    res.send(data);
})
app.put('/update', async(req,res) => {
    const data = await products.updateOne(
        {name:"hero"},{
            $set:{price:200000011,
            brand:"HHHHHHHHHHHHH"}
        }
    );
    console.log("done");
    res.send(data);
})


app.get('/search/:key', async(req,res)=>{
    const data = await products.find(
        { "$or" : [
            {"name":{$regex:req.params.key}}
        ]}
    );
    res.send(data);
    console.log(req.params.key)
    
})

app.listen(4500);
