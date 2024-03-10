const express = require("express")
const path = require("path")

const app = express();
app.set('view engine', 'ejs');
const publicPath = path.join(__dirname,'public')


// app.use(express.static(publicPath));   
// it will show the extentions of file like .html


//for removing the extention we can use GET method
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/profile',(req,resp)=>{
    const user={
        name:'aditya',
        city:'pune',
        email:'aditya@test.com',
        skills:['c++','js','php']
    }
    resp.render('profile',{user});
})

app.get('/login',(req,resp)=>{
    resp.render('./login')
})


//if user try to find notExsisteing page then go to this page
//404 is know for page not found 4 o 4
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})



app.listen(4500);
