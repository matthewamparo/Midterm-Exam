//modules

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middle
app.use(cors());
app.use(express.json());


// ROUTES
app.get("/PailanAmparo_2.1.1",async (req, res) => {
    try{
            const sql = "SELECT COUNT(*) FROM public.film;";
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.1.2",async (req, res) => {
    try{
            const sql = "SELECT rating, SUM( rental_duration ) FROM film GROUP BY rating ORDER BY rating;";
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.1.3",async (req, res) => {
    try{
            const sql = "SELECT film_id, title FROM film WHERE replacement_cost =( SELECT MAX( replacement_cost ) FROM film ) ORDER BY title;";
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.2.1",async (req, res) => {
    try{
            const sql = "select * from midterm_list_of_films;";
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.2.2",async (req, res) => {
    try{
            const sql = "select * from midterm_total_films_per_category;";
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.3.1",async (req, res) => {
    try{
            const sql = 'SELECT c.first_name "Name" , p.customer_id "ID" FROM customer c JOIN payment p ON c.customer_id = p.customer_id;';
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});    
app.get("/PailanAmparo_2.3.2",async (req, res) => {
    try{
            const sql = 'SELECT a.first_name, fa.actor_id, f.film_id, f.title FROM actor a JOIN film_actor fa ON a.actor_id = fa.actor_id JOIN film f ON f.film_id = fa.film_id;';
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.4.1",async (req, res) => {
    try{
            const sql = 'select total()';
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.get("/PailanAmparo_2.4.2",async (req, res) => {
    try{
            const sql = 'SELECT actor()';
            const task4 = await pool.query(sql);
            res.json(task4);
            //console.log(task4);
    }catch(err){
        console.error(err.message);

    }
});
app.listen (9400, ()=>{
    console.log("server has started on port http://localhost:5000");
});
