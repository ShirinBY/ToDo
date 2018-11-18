const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
//Creat the connection
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password:'releaseUs40',
database: 'todo'
});
// To make sure if connection works
try {

  connection.connect();

} catch (e) {

  console.log('database connection not working');
  console.log(e);

}


const api = express();

api.use(express.static(__dirname +'/public'));
api.use(bodyParser.json());
// api.use((req, res, next) => {
//console.log('You fancy girl');
// next();
// });

api.listen(3000, () =>{
  console.log('API up and running')   
});

// api.get('/',(req, res) => {
// /console.log(req);/
// res.send('Hi Shirin');
// });
api.post('/add',(req, res) => {
//console.log(req.body);
//res.send('It works shirin');
    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) =>{
    if (error) return res.json({error:error});

        connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) =>  {
          if (error) return res.json({error:error});
          //console.log(results[0]['LAST_INSERT_ID()']);
            res.json({
            id: results[0]['LAST_INSERT_ID()'],
            description: req.body.item //we send this back with our request so I commented out console.log
            });
        });

    });
});