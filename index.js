// import express from 'express'
const express = require('express')
const app = express()


// статические файлы
// поиск файла идет как в проводнике
// статика должна быть выше написана get set запросов чтоб сервер просканировал всю папку до запроса вдруг запрос требует файл
// в ссылке папку static_files указывать не нужно
// http://localhost:3000/img/110435-iskusstvo-graficeskij_dizajn-svet-krasnyj_cvet-art-1920x1080.jpg
// http://localhost:3000/file/text.txt
app.use(express.static("static_files"))


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