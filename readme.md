# создание пустого сервера nodeJS
в консоле папки проекта пишем 

``` bash
npm init
```
там не обязательно что либо писать это информация о проекте и его создателе
<br/>
появился файл package.json 

<br/>
теперь создаём файл

``` bash
index.js
```
и в него для проверки пишем

``` bash
console.log("hello world")
```
запуск сервера осуществляется через команду

``` bash
node index.js
```
если в терминале вывелась наше сообщение то сервер работает

___

Заметка 
<br/>
для завершения выполнения команды нужно нажать
<br/>
ctrl + c

___

# создание скриптов

в файле package.json
<br/>
находим ключ объекта - "scripts"
<br/>
в нём пишем

``` bash
"название скрипта":"команду терминала",
```
например:

``` bash
"dev":"node index.js",
```
использовать скрипт можно:
<br/>
1. (в папке) сценарии npm
<br/>
2. (в терменале) npm ran название_скрипта



# подключение express к серверу

в консоле папки проекта пишем 

``` bash
npm i express
```
после этого в файл index.js вставляем 

``` bash
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
после этого запускаем сервер
<br/>
и в браузере пишем

``` bash
http://localhost:3000/
```
на странице должна быть надпись - Hello World





