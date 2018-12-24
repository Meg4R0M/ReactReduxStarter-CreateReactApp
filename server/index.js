const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require("./route");
const mongoose = require("mongoose");

mongoose.connect("mongodb://Meg4R0M:password123@ds145923.mlab.com:45923/dbmeg4r0m",
    { useNewUrlParser: true }
);
mongoose.connection
    .once('open', () => console.log("Connecté à MLab"))
    .on('error', error => console.log("Erreur de connexion à MLab : ", error));

// App Setup
expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({ type: '*/*' }));
router(expressServer);
// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(expressServer);
server.listen(port);
console.log('Server listening on:', port);