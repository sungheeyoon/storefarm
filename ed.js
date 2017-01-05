var express = require('express');
var app = express();
var list=["셋트명", "메모", "등록일", "메모", "설정"];
var list2 = ["스토어팜 기준가", "testaa", "16.12.12 19:11", "2(30)만", "삭제"]
var list3 = ["쿠팡 기준가", "testaa", "16.12.12 19:11", "2(30)만", "삭제"]

var asset = ['금액', '마진율','배송비']
var asset2 = ["5000원 미만", "25%", "2500"]
var asset3 = ["5000원 이상 10000원 미만", "25%", "2500"]
var asset4 = ["10000원 이상 30000원 미만", "25%", "2500"]
var asset5 = ["30000원 이상 50000원 미만", "25%", "2500"]
var asset6 = ["50000원 이상 100000원 미만", "25%", "2500"]
var asset7 = ["100000원 이상 200000원 미만", "25%", "2500"]
var asset8 = ["200000원 이상", "25%", "2500"]

var list_log1=["사이트 종류", "아이디", "요청 시간", "작업 종류", "기동 간격", "시작일시", "종료일시", "처리건수", "관리메모", "상태"]
var list_log2=["스토어팜", "testaa", "16.12.12 19:11", "증분작업", "매시:50분","16.12.12 19:11", "16.12.12 19:11", "50",'', "대기중"]
var list_log3=["스토어팜", "testaa", "16.12.12 19:11", "상품순환", "1번","16.12.12 19:11", "16.12.12 19:11", "9854", '',"완료"]

var il_list1=["사이트 종류", "아이디", "최종 연동일", "등급", "현 상품수", "신규주문", "신규문의", "최근 순환일", "최근 증분일", "최근 품단종일", "설정"]
var il_list2=["스토어팜", "testaa", "16.12.12 19:11", "2(30만)", "274125", "50", "6", "16.12.12 19:11", "16.12.12 19:11", "16.12.12 19:11", "설정"]
var il_list3=["스토어팜", "testaa", "16.12.12 19:11", "2(30만)", "274125", "50", "6", "16.12.12 19:11", "16.12.12 19:11", "16.12.12 19:11", "설정"]

var textarray =['판매타입','과세면세','배송비']
var textarray2 =['원산지','원장구분','필터링']
var textarray3 =["회원정보선택",'오너클랜아이디','마켓아이디','마켓종류','가입일','등급','최근순환일','최근증분일','최근품단종일']

var text_list = ['상품코드','카테고리','상품명','원장상태','공급가','준수가','배송유형','제조사','원산지','등록일','수정일']
var text_list2 = ['W902','핸드폰','testaa','원장','15412','20000','선착','제조사','국산','2016-12-12 16:34','2016-12-12 16:34']
var text_list3 = ['W902','핸드폰','testaa','-','15412','20000','선착','제조사','국산','2016-12-12 16:34','2016-12-12 16:34']



var array =new Array(list, list2, list3)
var array1 = new Array(asset,asset2,asset3,asset4,asset5,asset6,asset7,asset8)
var array2 = new Array(text_list,text_list2,text_list3)



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

  res.render('tabletest', {array,array1});

})
app.get('/text.jade', function(req,res){

  res.render('text');

})
app.get('/marketid_regist.jade', function(req,res){

  res.render('marketid_regist');

})
app.get('/product_8.jade', function(req,res){

    res.render('product_8',{textarray,textarray2,textarray3,array2});

})
app.get('/interlock_7.jade', function(req,res){

  res.render('interlock_7', {table1:[il_list1, il_list2, il_list3],table2:[list_log1, list_log2, list_log3]});

})
app.listen(3000, function(){
  console.log('Connected 3000 port!');

})
