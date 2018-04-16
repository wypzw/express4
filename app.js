var express = require('express');//����expressģ��
var path = require('path');//·��ģ��
var favicon = require('serve-favicon');//������ҳ��logo
var logger = require('morgan');//�ڿ���̨�У���ʾreq�������Ϣ
var cookieParser = require('cookie-parser');//�����һ������Cookie�Ĺ��ߡ�ͨ��req.cookies����ȡ����������cookie����������ת�ɶ���
var bodyParser = require('body-parser');//node.js �м�������ڴ��� JSON, Raw, Text �� URL ��������ݡ�

// ·����Ϣ���ӿڵ�ַ���������routes�ĸ�Ŀ¼
var app = express();


// ģ�忪ʼ
app.set('views', path.join(__dirname, 'views'));//������ͼ��Ŀ¼
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'jade');//������ͼ��ʽ�����˲�̫ϲ����jade���������ύ���ʹ��html��ʽ���ļ���

// �����м��
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

//����·�ɣ���'�Զ���·��'���������õĽӿڵ�ַ��
//
//��������
app.get('/about_us.html',function(req,res){
  res.render('about_us');
});
app.get('/',function(req,res){
  res.render('index');
});
app.get('/index.html',function(req,res){
    res.render('index');
});
app.get('/information.html',function(req,res){
  res.render('information');
});
//��ϵ����
app.get('/news_list.html',function(req,res){
  res.render('news_list');
});
app.get('/contact_us.html',function(req,res){
  res.render('contact_us');
});
app.get('/article_Content.html',function(req,res){
  res.render('article_Content');
});



// ������
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
