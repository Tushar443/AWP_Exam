const express =require('express');
const { static } = require('express');
const path =require('path');

app =express();

app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
   res.render('Home'); 
});

app.get('/login',(req,res)=>{
    res.render('Login'); 
 });

 app.get('/signup',(req,res)=>{
    res.render('Signup'); 
 });

app.listen(5600,(err)=>{
    if (err) throw err
    console.log('Server Listing on port 5600');
});