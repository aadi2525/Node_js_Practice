const express = require('express');
const app = express();


const filterReq = (req,res,next) => {
if(!req.query.age){
    res.send('please enter a age')
    
}else if(req.query.age<18){
    res.send('you can not access the page')
    
}else{
    next()
}
}

app.use(filterReq);

app.get('/',(req,res)=>{
    res.send('Home page');
})
app.get('/user',(req,res)=>{
    res.send('user page');
})

app.listen(5000);

