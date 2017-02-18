var express = require('express');

var app = express();

app.disable('x-powered-by')

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(require('body-parser').urlencoded({
  extended: true
}));

//

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.use(function(req, res, next){
  console.log("Looking for URL: "+ req.url);
  next();
});

app.get('/learn', function(req, res){
  res.render('learn');
});

app.listen(app.get('port'), function(){
  console.log("Express started on localhost:" + app.get('port') + ' press Ctrl-C')
})

app.use(function(err, req, res, next){
  console.log('Error: ' + err.message);
  next();
});

app.use(function(req, res){
  res.type('text/html');
  res.status(404);
  res.render('404');
  console.error('404')
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
