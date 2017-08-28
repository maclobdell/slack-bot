var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.locals.token = 'xxxx'

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  response.json({ message: 'hello' });
});

app.get('/test', function(request, response) {
  //response.send(cool());
  response.json({ message: 'yo, whats up...' });
});

app.post('/auslabstat', function(request, response) {
  //response.json({ message: 'got it' });
  //if (!request.body) return res.sendStatus(400)
   if (request.token == app.locals.token){
      response.json( {message: 'token validated'})
   }
   else {
        response.json( {message: 'screw you'})
  }
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//MAYBE SCRAP ALL THIS AND USE THIS MODULE INSTEAD
https://www.npmjs.com/package/express-slack




///new
// POST /login gets urlencoded bodies
app.post('/login', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
})
