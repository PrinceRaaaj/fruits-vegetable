const express = require("express");
const bodyParser = require("body-parser");
const fruits = require("./data/fruits");
const vegetables = require("./data/vegetables");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("fruits & vegetables api"));
app.get("/fruits", (req, res) => res.json(fruits));
app.get("/vegetables", (req, res) => res.json(vegetables));
app.get("/all", (req, res) => res.json([...fruits, ...vegetables]));

app.listen(8000, () => console.log("server started on Port 8000"));

/* 
api paths

http://localhost:8000/all
http://localhost:8000/fruits
http://localhost:8000/vegetables

*/
