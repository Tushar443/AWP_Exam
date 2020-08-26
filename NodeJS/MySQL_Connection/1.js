const promise =require('bluebird');
const mysql=require('mysql');

promise.promisifyAll(require('mysql/lib/Connection').prototype);
promise.promisifyAll(require('mysql/lib/pool').prototype);

const db_config={
    host:'localhost',
    user:'root',
    password:'@Tushar44',
    database:'Customer',
}

DbConnect();

async function DbConnect(){

    let connection = mysql.createConnection(db_config);
 
  await connection.connect();
   console.log('Complete');
//   await connection.endAsync();
 }

// async function DbConnect(){

//    let connection = mysql.createConnection(db_config);

//    connection.connect(()=>{
//        console.log('Connected Succesfully');
//    })
// }


