var express = require('express');
var app = express();
var list=["셋트명", "메모", "등록일", "메모", "설정"];
var list2 = ["스토어팜 기준가", "testaa", "16.12.12 19:11", "2(30)만", "삭제"]
var list3 = ["쿠팡 기준가", "testaa", "16.12.12 19:11", "2(30)만", "삭제"]
app.set('view engine','jade');
app.set('views','./jade-views');
app.use('/assets',express.static('assets'));

function app_get(path, file) {
  app.get(path, function(req, res){
    res.render(file);
  })
}
app.get('/as.jade', function(req, res) {
  res.render('as')
})
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

  res.render('tabletest', {list, list2, list3});

})

app.listen(3000, function(){
  console.log('Connected 3000 port!');

})
