var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/auth_callback', function(req, res, next) {
    res.send('respond with a auth_callback');
});

module.exports = router;
