const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: '9f!7ni/ceg_hvs74"qwph*%@r@{'
});

module.exports = pool.promise();
