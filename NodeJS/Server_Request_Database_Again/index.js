const db_Connect=require('./db_Connect');

const app =require('express')();


app.get('/',(req,res)=>{

   let name= req.query.name;
   let city =req.query.city;
   let user ={
       name ,city
   }

   db_Connect.insertData(user)
    res.json({
        res:200,
        name : 'Thunder',
    })

});

app.listen(5600,()=>{
    console.log('Server is listening on 5600');
});