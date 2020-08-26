const http=require('http');
let multi=require('./Module');

http.createServer((req,res)=>{
    res.end(JSON.stringify(multi));
}).listen(5600,()=>{
    console.log("Server is listening on port 5600s");
});
