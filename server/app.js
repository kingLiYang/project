var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// 注册user接口
var users = require('./routes/users');
app.use('/users',users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 访问静态资源

app.use(express.static(path.resolve(__dirname, '../dist')));

// 访问单页

app.get('*', function(req,res){
    var html = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'), 'utf-8');
    res.send(html);
})

// 监听
app.listen(6868,function(){
    console.log('服务启动');
})