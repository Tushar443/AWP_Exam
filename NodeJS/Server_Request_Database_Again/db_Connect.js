const db_config=require('./db_config');
const mysql =require('mysql');
const promise =require('bluebird');

promise.promisifyAll(require('mysql/lib/Connection').prototype);
promise.promisifyAll(require('mysql/lib/Pool').prototype);

let addData =async ()=>{
    const Connection = mysql.createConnection(db_config);

    await Connection.connect();

   let mysql_query='Select * from user';

  let result =await Connection.queryAsync(mysql_query);

  Connection.endAsync();
}




let insertData =async (user)=>{
    let username =user.name;
    let city =user.city;

    const Connection = mysql.createConnection(db_config);

    await Connection.connect();

   let mysql_query='insert into user (my_name,city) values (?,?)';

  let result =await Connection.queryAsync(mysql_query,[username,city]);

  Connection.endAsync();
}

module.exports= {addData,insertData};