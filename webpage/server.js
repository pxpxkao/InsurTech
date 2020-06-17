const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "35.221.197.27", // "localhost",
  user: "root", // "tiffany",
  password: "Q4uW5iE6o.", // "123",
  database: "insurtech_project", //"acme",
});

connection.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("Connect to database!");
  }
});

app.get("/clients/:city_name", (req, res) => {
  const { city_name } = req.params;
  const sql = `SELECT 公司列表.統一編號, 公司列表.公司名稱, 公司列表.核准設立日期, 公司列表.行業分類, 行政區.區域 FROM 公司列表
  INNER JOIN 行政區 ON 公司列表.行政區=行政區.序號
  WHERE 行政區.行政區 = "${city_name}";`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.get("/locations/:city_name", (req, res) => {
  const { city_name } = req.params;
  const sql = `SELECT 區域 FROM 行政區 WHERE 行政區.行政區 = "${city_name}";`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.get("/client/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT 公司列表.統一編號, 公司列表.公司名稱, 公司列表.公司所在地, 公司列表.代表人, 
  公司列表.資本額, 公司列表.核准設立日期, 公司列表.行業分類, 
  a.單位 AS 最近之通訊處, b.單位 AS 次近之通訊處
  FROM 公司列表
  INNER JOIN 國泰服務據點 AS a ON 公司列表.最近之通訊處=a.序號
  INNER JOIN 國泰服務據點 AS b ON 公司列表.次近之通訊處=b.序號
  WHERE 公司列表.統一編號=${id};`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.get("/client/categories/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM 各公司所營事業 
  INNER JOIN 營業項目列表 AS b ON 各公司所營事業.營業項目代碼=b.營業項目代碼
  WHERE 各公司所營事業.統一編號=${id};`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.post("/past/categories", (req, res) => {
  // console.log("body:", req.body);
  let where_sql = "(";
  req.body.cats.forEach((c) => (where_sql += '"' + c + '",'));
  where_sql = where_sql.substr(0, where_sql.length - 1);
  where_sql += ")";

  const sql = `SELECT * FROM 過去各營業項目保戶統計 WHERE 過去各營業項目保戶統計.營業項目代碼 IN ${where_sql};`;
  // console.log("sql:", sql);
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
  // res.json({ data: data_ });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

// app.get("/users/add", (req, res) => {
//   const { first_name, last_name } = req.query;
//   res.send(`${first_name} ${last_name}`);
// });

// app.get("/users", (req, res) => {
//   const sql = `SELECT * FROM users;`;
//   connection.query(sql, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json({ data: results });
//     }
//   });
// });

// app.get("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM users WHERE id=${id};`;
//   connection.query(sql, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({ data: results });
//     }
//   });
// });
