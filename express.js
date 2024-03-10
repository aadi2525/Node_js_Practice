const express = require("express");

const app = express();

app.get('',(req,resp) => {
    console.log("data send by browser ==>>>>> " ,req.query.name);
    resp.send("welcome "+ req.query.name);
});
app.get('/about',(req,resp) => {
    resp.send('welcome , this is about page');
});

app.get('/help',(req,resp) => {
    resp.send('welcome , this is help page');
});
app.listen(5000);