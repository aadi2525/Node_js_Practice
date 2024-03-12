const express = require('express');
require('./Config.js')
const products = require('./Products.js')

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

app.listen(4500);