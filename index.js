console.log("iuytre")
const express = require('express')
const app = express()


// http://localhost:3000/
app.get('/', function (req, res) {
  res.send('Hello World')
})

// http://localhost:3000/A9
app.get('/A9', function (req, res) {
  res.send('9pip9')
})




app.listen(3000)