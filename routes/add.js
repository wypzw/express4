/**
 * Created by Lucky on 2017/11/16.
 */
var express = require('express');
var router = express.Router();
var URL = require('url');
//����mysqlģ��
var mysql      = require('mysql');
//��������
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
});
//ִ�д�������
connection.connect();
//SQL���
var  sql = 'SELECT * FROM userInfo';
//var  addSql = 'INSERT INTO name(id,name,sex) VALUES(?,?,?)';

router.get('/', function(req, res, next) {
    ////�����������
    //var params = URL.parse(req.url, true).query;
    //var addSqlParams = [params.id, params.name, params.sex];
    //
    ////��
    //connection.query(addSql,addSqlParams,function (err, result) {
    //    if(err){
    //        console.log('[INSERT ERROR] - ',err.message);
    //        return;
    //    }
    //});

    //��
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result);
        //������ֵ���
        res.render('index',{user:result});
    });
});

module.exports = router;