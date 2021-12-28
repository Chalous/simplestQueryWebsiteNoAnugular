var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var boardModel = mongoose.model('board');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/query', function(req, res) {
  // 通过req.query.问号后面的字段 可以直接获取到要查询的key
  var queryKey = req.query.key;
  var obj = {};
  obj.boardInfo = queryKey;
  console.log('--->', obj);
  // find方法和findOne方法都是接受object类型的数据去查询，单带字符串不行
  boardModel.findOne(obj).exec(function(err, data, count) {
    console.log('data',data);
    // 查询后的数据在data里，将其发送回js脚本函数里，传回去的在req字段中
    res.send(data);
  })
});

module.exports = router;
