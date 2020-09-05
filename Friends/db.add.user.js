const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "60037720350",
  database: "angular",
};

let addUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
  "INSERT INTO user (name,email,mobile,username, password, confpassword) VALUES (?, ?, ?, ?,?,?)";
  await connection.queryAsync(sql, [
    input.name,
    input.email,
    input.mobile,
    input.username,
    input.password,
    input.confpassword,
  ]);

  await connection.endAsync();
};



let emailvarification = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE email=?";
  const results = await connection.queryAsync(sql, [
    input.email
  ]);
  
  await connection.endAsync();
  
  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
  return results;
};

let authenticateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE USERNAME=? AND PASSWORD=?";
  const results = await connection.queryAsync(sql, [
    input.username,
    input.password,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};


let changepassword = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "update user set password=?, confpassword=? where email=?";
  const results = await connection.queryAsync(sql, [
    input.password,
    input.confpassword,
    input.email,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};


let showusername = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();
  

  let sql = "SELECT * FROM USER WHERE username=?";
  const results = await connection.queryAsync(sql, [
    input.username
  ]);
  
  await connection.endAsync();
  
  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
  console.log(results);
  return results;
};
let storyadd = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
  "INSERT INTO story (name,username, title,story) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.name,
    input.username,
    input.title,
    input.story,
  ]);

  await connection.endAsync();
};

module.exports = { addUser, authenticateUser ,emailvarification,changepassword,storyadd ,showusername};
