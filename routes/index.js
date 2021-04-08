var express = require('express');
var messageController = require('../controller/Message');
var router = express.Router();
var prefix = '/api';

router.post(`${prefix}/reply`, messageController._postReply);
// 
router.delete(`${prefix}/messages/:id`, messageController._removeById);
// 
router.get(`${prefix}/messages/:id`, messageController._getById);
router.get(`${prefix}/counter`, messageController._counter);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJs Bot' });
});

module.exports = router;
