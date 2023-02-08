//mysql 모듈 가져오기
const mysql = require('mysql');
const {HOST, USER, PASSWORD, DB} = require("../app/config/db_config");

//mysql 연결하기
const connection = mysql.createConnection({
   host: HOST,
   user: USER,
   password: PASSWORD,
   database: DB
});

// DB 연동 확인하기
connection.connect((err) => {
   if(err) throw err;
   console.log('DB is Connected');
});

module.exports = connection;
