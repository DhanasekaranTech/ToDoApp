const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 2222;


app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'todoapp',
    port:'3307'
    
})

db.connect((err, connection) => {
    if (err) {
        console.log(err);
    }
    else {
    console.log(`server is running on http://localhost:${PORT}`);
    }
})

app.get('/', (req, res) => {
    const sqlQuery = "SELECT * FROM lists";
    db.query(sqlQuery, (err, data) => {
        if (err) return res.json("error:" + err)
        return res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Listening on the port:${PORT}`);
})

