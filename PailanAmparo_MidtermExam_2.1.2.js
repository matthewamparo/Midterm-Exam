const pool = require("./db");


pool.query(`
SELECT 
 rating, SUM( rental_duration ) FROM film GROUP BY rating ORDER BY rating;`, (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();