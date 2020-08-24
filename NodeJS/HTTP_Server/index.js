const http=require('http');
let multi=require('./Module');

http.createServer((req,res)=>{
    res.end(JSON.stringify(multi));
}).listen(5600);
