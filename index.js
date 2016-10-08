'use strict';
const engine = require('engine.io');
const express = require('express');
const messageFactory = require('./JsonMessageFactory');

const heroesMsg = messageFactory.createMessage('heroes', require('./data/heroes.json')).toString();
const matchingMsg = messageFactory.createMessage('matching', require('./data/matching.json')).toString();
const mapsMsg = messageFactory.createMessage('maps',  require('./data/maps.json')).toString();

const PORT = process.env.PORT || 7654;
const server = express()
    .use((req, res) => res.send('ok') )
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

let ws = engine(server);

ws.on('connection', function (socket) {
    console.log('ccnnection requested');
    socket.send(heroesMsg);
    socket.send(matchingMsg);
    socket.send(mapsMsg);
});
