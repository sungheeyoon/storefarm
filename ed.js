var express = require('express');
var app = express();
var list=["셋트명", "메모", "등록일", "메모", "설정"];
var list2 = ["스토어팜 기준가", "testaa", "16.12.12 19:11", "2(30)만", "삭제"]
var list3 = ["쿠팡 기준가", "testaa", "16.12.12 19:11", "2(30)만", "삭제"]
var list4 = ['금액', '마진율','배송비']
var list5 = ["5000원 미만", "25%", "2500"]
var list6 = ["5000원 이상 10000원 미만", "25%", "2500"]
var list7 = ["10000원 이상 30000원 미만", "25%", "2500"]
var list8 = ["30000원 이상 50000원 미만", "25%", "2500"]
var list9 = ["50000원 이상 100000원 미만", "25%", "2500"]
var list10 = ["100000원 이상 200000원 미만", "25%", "2500"]
var list11 = ["200000원 이상", "25%", "2500"]

var array =new Array(list, list2, list3,list4,list5,list6,list7, list8, list9,list10,list11)
app.set('view engine','jade');
app.set('views','./jade-views');
app.use('/assets',express.static('assets'));

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

  res.render('tabletest', {array});

})

app.listen(3000, function(){
  console.log('Connected 3000 port!');

})
