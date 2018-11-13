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
console.log(req.body);
res.send('It works shirin');
});