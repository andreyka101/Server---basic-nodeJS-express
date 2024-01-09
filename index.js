const express = require('express')
const app = express()


// статический путь
// http://localhost:3000/
app.get('/', function (req, res) {
  res.send('Hello World')
})

// статический путь
// http://localhost:3000/A9
app.get('/A9', function (req, res) {
  res.send('9pip9')
})

// динамический путь
// http://localhost:3000/hello/текст
app.get('/hello/:name', function (req, res) {
  res.send('hello ' + req.params.name)
})


// вывод в терминал
console.log("сервер работает")

// порт
app.listen(3000)