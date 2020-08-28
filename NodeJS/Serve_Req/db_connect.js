const db_config=require('./db_config');
const mysql =require('mysql');
const promise=require('bluebird');

promise.promisifyAll(require('mysql/lib/Connection').prototype);
promise.promisifyAll(require('mysql/lib/pool').prototype);

let readData = async (user)=>{
    const connection=mysql.createConnection(db_config); 
    
   await connection.connectAsync();
    let my_Query='select * from user';
   let result =await connection.queryAsync(my_Query);
    // console.log(result,'14_db');
   await connection.endAsync();
   console.log('Connection end');
   return result;
}

let insertData = async (user)=>{
    const connection=mysql.createConnection(db_config); 
    
   await connection.connectAsync();
    let my_Query='insert into user(My_name,city) values (?,?) ';
   let result =await connection.queryAsync(my_Query,[user.username,user.city]);
   await connection.endAsync();
   console.log('Connection end');
   return result;
}

module.exports= {readData,insertData};




