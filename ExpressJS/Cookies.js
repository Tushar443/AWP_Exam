const express =require('express');
const session =require('express-session');
const app =express();

app.use(session({
    secret : "ThunderStrome",
}));
app.get('/',(req,res)=>{
    // res.cookie('name','Thunder',{maxAge : 3600}).send('cookies set');

    res.clearCookie('express');
    res.send({
        message : "Done"
    })
});

app.get('/session',(req,res)=>{
    let counter =req.session.count;
    if(req.session.count){
       counter++;
        res.send('count :- '+ counter);
    }else{
        counter=1;
        res.send('Welcome to First Request :' + counter);
    }
})



app.listen(5600,()=>{
    console.log('Server is listning on port 5600');
})