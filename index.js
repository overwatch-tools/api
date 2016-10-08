'use strict';
let engine = require('engine.io');

let messageFactory = require('./JsonMessageFactory');

let heroesMsg = messageFactory.createMessage('heroes', require('./data/heroes.json')).toString();
let matchingMsg = messageFactory.createMessage('matching', require('./data/matching.json')).toString();
let mapsMsg = messageFactory.createMessage('maps',  require('./data/maps.json')).toString();

let server = engine.listen(80);

server.on('connection', function (socket) {
    console.log('ccnnection requested');
    socket.send(heroesMsg);
    socket.send(matchingMsg);
    socket.send(mapsMsg);
});
