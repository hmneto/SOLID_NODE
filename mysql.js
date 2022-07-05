var mysql = require('mysql')
var db_config = {
  host:'localhost',
  user: 'root',
  password: 'usbw',
  port: 3306
};
const connection = mysql.createPool(db_config)
connection.query('select 1 + 1', (err, rows) => console.log(rows))
