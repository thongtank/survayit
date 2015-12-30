<<<<<<< HEAD
/**
 * Create ExpressJS Server
 * @type {Object}
 */
var express = require('express');
var app = express();

/**
 * Create Server
 * @type {Object}
 */
var server = require('http').createServer(app);

/** @type {Object} Create IO Server from httpServer */
var io = require('socket.io')(server);

/** Create Static Path for SRC in HTML or another files */
app.use('/static', express.static(__dirname));

/** [description] */
app.get('/', function(req, res) {
    res.send('Hello World!!!!');
});

server.listen(3000, function() {
    console.log('Connect to 3000');
});
=======
/**
 * Create ExpressJS Server
 * @type {Object}
 */
var express = require('express');
var app = express();

/**
 * Create Server
 * @type {Object}
 */
var server = require('http').createServer(app);

/** @type {Object} Create IO Server from httpServer */
var io = require('socket.io')(server);

/** Create Static Path for SRC in HTML or another files */
app.use('/static', express.static(__dirname));

/** [description] */
app.get('/', function(req, res) {
    res.send('Hello World!!!!');
});

server.listen(3000, function() {
    console.log('Connect to 3000');
});
>>>>>>> origin/master
