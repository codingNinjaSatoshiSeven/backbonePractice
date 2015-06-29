var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

//set dirname to client folder to serve static assets (index.html)
app.use('/', express.static(__dirname + '/public'));

//parses all incoming data from strings to JSON
app.use(bodyParser.json());

var id = 0;
var books = {};

books[++id] = {id:id, author: 'Arthur C. Doyle', title: 'Sign of the Four'};

app.get('/books/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  res.json(books[id]);
})

app.post('/books', function(req, res) {
  var book = req.body;
  book.id = ++id;
  books[book.id] = book;
  res.json(book);
});

app.put('/books/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  books[id] = req.body;
  res.json(books[id]);
});

app.delete('/books/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  delete books[id];
  res.json(null);
})

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, function() {
  console.log("Listening on port " + port + "...");
});