const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app);

//  un public path
const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;


//  un middleware para que se pueda acceder a la carpeta publica
app.use(express.static(publicPath));


//  IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket.js')




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});