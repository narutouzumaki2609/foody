const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const { MongoClient } = require("mongodb");
const mongodb = require('./Db')
const fetchData = require('./Fetchdb')
mongodb();
fetchData()
  .then(() => {
    console.log('Data fetching complete');
  })
  .catch((err) => {
    console.error('Error:', err);
  });

// const   mongodb= async ()=>{
//   try{
//   await mongoose.connect('mongodb://localhost:27017/FoodyDb');
//   console.log('connected')
//   }
//   catch{
//     console.log('error')
//   }
// }
// const mongodb=require('./Db')
// mongodb();
app.use('/api', require('./Routes/Createuser'))
app.use('/api', require('./Routes/DisplayData'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})  