var express = require('express');
var router = express.Router();

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

module.exports = router;
