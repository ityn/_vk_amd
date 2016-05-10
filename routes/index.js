var express = require('express');
var router = express.Router();
var wp =require("./wp");
//var wp2 =require("./wp2");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function(req, res, next) {
  res.render('auth', { title: 'Auth' });
});

router.get('/auth_callback', function(req, res, next) {
  res.render('auth', { title: 'Auth_callback' });
});

router.get('/wall_post', wp);
//router.get('/wall_post2', wp2);

module.exports = router;
