var express = require('express');
var app = express();
app.set('view engine','jade');
app.set('views','./jade-views');
app.use('/assets',express.static('assets'));
app.get('/', function(req,res){

  res.render('layout');

})
app.get('/login.jade', function(req,res){

  res.render('login');

})
app.get('/forgot_select.jade', function(req,res){

  res.render('forgot_select');

})
app.get('/form_element.jade', function(req,res){

  res.render('form_element');

})

app.get('/form_component.jade', function(req,res){

  res.render('form_component');

})
app.get('/market_list.jade', function(req,res){

  res.render('market_list');

})
app.get('/market_regist.jade', function(req,res){

  res.render('market_regist');

})
app.get('/market_margin.jade', function(req,res){

  res.render('market_margin');

})
app.listen(3000, function(){
  console.log('Connected 3000 port!');

})
