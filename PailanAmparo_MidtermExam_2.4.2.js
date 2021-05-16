const pool = require("./db");


pool.query(`SELECT actor() `, (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();