var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/home.html')
})

app.get('/contatos', function(req, res){
  res.sendFile(__dirname + '/html/contatos.html')
})

app.listen(3000, function(){
  console.log("ta rodando na 3000");
})
