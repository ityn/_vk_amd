var express = require('express');
var router = express.Router();

// Setup
var VK = require('vksdk');
var vk = new VK({
    'appId'     : 5080342,
    'appSecret' : 'gaMQGLcOVBXwPBKGSSnD',
    'language'  : 'ru',
    'v': '5.52'
});

var access_token = "bc8d314f5dbb52269398891560095b7302f4471f84ae402f5981a55f3a3047e44cc5493aea10e653bc5cc";
var u_id = 88567346;
var club1 = -72688782;
var club2 = -100659116;
var scope = 337026;
vk.setSecureRequests(true);
vk.setToken(access_token);

// Request 'users.get' method

// Setup server access token for server API methods
//vk.on('serverTokenReady', function(_o) {
//    // Here will be server access token
//    console.log(_o.access_token);
//    vk.setToken(_o.access_token);
//});
//
//// Turn on requests with access tokens
//vk.setSecureRequests(true);
//https://api.vk.com/method//wall.post?owner_id=-100659116&message=TEST#&v=5.52&access_token=b27813b3256e60152929a322de2321ce3e8e98ab6053089b5124b188e36b6d23cbb272891a92ddca30baa
/* GET users listing. */
router.get('/wall_post', function(req, res, next) {
    //vk.request('users.get', {'user_id' : u_id}, function(_o) {
    vk.request('wall.post', {'owner_id': club1, 'message': 'test2', 'guid': 'p123456'}, function(_o){
        console.log(_o);
        res.send('respond with a Wall_Post');
    });
});

module.exports = router;
