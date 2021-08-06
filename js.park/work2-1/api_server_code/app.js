const express = require('express');
const app = express();
const PORT = 3000;
const dummy = require('./MOCK_DATA.json');
const cors = require('cors');

app.use(cors());

app.get('/',(req, res) =>{
  res.send('Test API Server');
})

app.get('/api',(req, res) =>{
  return res.json(dummy);
})

app.listen(PORT, () =>{
  console.log(PORT,'Port Listening!')
})
