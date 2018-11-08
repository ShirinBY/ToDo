const express = require('express');
const api = express();

api.use(express.static(__dirname +'/public'));
// api.use((req, res, next) => {
// console.log('You fancy girl');
// next();
// });

api.listen(3000, () =>{
  console.log('API up and running')   
});

// api.get('/',(req, res) => {
// /console.log(req);/
// res.send('Hi Shirin');
// });
api.post('/add',(requ, res)=> {
//console.log('Your post received');
console.log(req.body);
res.send('Hi Shirin you are in postman');
});