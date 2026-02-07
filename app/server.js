const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;


const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "Sejal@123",
  database: "testdb"
});

db.connect((err) => {
  if (err) {
    console.error("database connection failed:", err.message);
  } else {
    console.log("connected to MySQL database");
  }
});


app.get("/", (req, res) => {
  res.send("<h2>app is running...</h2>");
});


app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
