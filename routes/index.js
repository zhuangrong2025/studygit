var express = require('express');
var router = express.Router();
var child_process = require('child_process');

//调用执行文件
var openApp = function(){
    child_process.execFile('2.bat',null,function (error,stdout,stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        else console.log('成功执行指令!');
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '-pm223' });
  openApp();
  console.log('正在执行bat文件--git pull');
});


module.exports = router;
