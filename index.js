const express = require('express');
const { Server } = require('http');
const path = require('path');
require('dotenv').config();

//DB config
require('./database/config').dbConnection();

//App de Express
const app = express();

//Lectura y parseo del body
app.use(express.json());

//Node Server
const server = require('http').createServer(app);

//path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//Rutas
app.use('/api/getData',require('./routes/getData'));
app.use('/api/postData',require('./routes/postData'));
//Listen
server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);

    console.log('Servicio corriendo en puerto: ',process.env.PORT);
});
