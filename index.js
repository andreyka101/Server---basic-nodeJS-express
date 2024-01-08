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
// http://localhost:3000/hello/текст
app.get('/hello/:name', function (req, res) {
  res.send('hello ' + req.params.name)
})



console.log("сервер работает")

app.listen(3000)