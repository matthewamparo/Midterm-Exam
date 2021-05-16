const pool = require("./db");


pool.query(`SELECT COUNT(*) FROM public.film;`, (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();