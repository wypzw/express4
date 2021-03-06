/**
 * Created by Lucky on 2017/11/16.
 */
var express = require('express');
var router = express.Router();
var URL = require('url');
//加载mysql模块
var mysql      = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
});
//执行创建连接
connection.connect();
//SQL语句
var  sql = 'SELECT * FROM userInfo';
//var  addSql = 'INSERT INTO name(id,name,sex) VALUES(?,?,?)';

router.get('/', function(req, res, next) {
    ////解析请求参数
    //var params = URL.parse(req.url, true).query;
    //var addSqlParams = [params.id, params.name, params.sex];
    //
    ////增
    //connection.query(addSql,addSqlParams,function (err, result) {
    //    if(err){
    //        console.log('[INSERT ERROR] - ',err.message);
    //        return;
    //    }
    //});

    //查
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result);
        //把搜索值输出
        res.render('index',{user:result});
    });
});

module.exports = router;