const pool = require("./db");


pool.query(`select * from midterm_list_of_films_per_category;`, (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();