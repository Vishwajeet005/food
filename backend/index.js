const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./Dbconnection');
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB();

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})