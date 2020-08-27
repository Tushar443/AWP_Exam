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
   let my_query= 'select * from user';
  await connection.connectAsync();
  let result=await connection.queryAsync(my_query);
   console.log(result);
  await connection.endAsync();
 }

// async function DbConnect(){

//    let connection = mysql.createConnection(db_config);

//    connection.connect(()=>{
//        console.log('Connected Succesfully');
//    })
// }


