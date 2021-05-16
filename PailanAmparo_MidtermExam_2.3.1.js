const pool = require("./db");


pool.query(`SELECT c.first_name "Name" , p.customer_id "ID" FROM customer c JOIN payment p ON c.customer_id = p.customer_id;`
, (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();