const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "tiffany",
  password: "123",
  database: "acme",
});

connection.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("Connect to database!");
  }
});

app.get("/", (req, res) => {
  res.send("go to /users to see users");
});

app.get("/users/add", (req, res) => {
  const { first_name, last_name } = req.query;
  res.send(`${first_name} ${last_name}`);
});

app.get("/users", (req, res) => {
  const sql = `SELECT * FROM users;`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM users WHERE id=${id};`;
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ data: results });
    }
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
