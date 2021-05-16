const pool = require("./db");


pool.query(`SELECT a.first_name, fa.actor_id, f.film_id, f.title FROM actor a JOIN film_actor fa ON a.actor_id = fa.actor_id JOIN film f ON f.film_id = fa.film_id;`, (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();