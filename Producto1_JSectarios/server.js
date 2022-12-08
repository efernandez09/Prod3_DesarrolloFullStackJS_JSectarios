const express = require('express');
const mongoose = require('mongoose');
const router = require('./server/routes/tab.routes');
const app = express();
const tabRoutes = require('./server/routes/tab.routes');
const cors = require('cors');
const bodyParser = require('body-parser');

// LA CONEXION A LA BBDD DE MONGO VA AQUI DEBAJO 
const MONGODB_URI = 'mongodb+srv://Pablo:pablo02@cluster0.vve9mwe.mongodb.net/test'

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected',() => {
    console.log("Te has conectado a la Base de datos.")
})

mongoose.connection.off('disconnected',() => {
    console.log("Te has desconectado a la Base de datos.")
})

const defaultPort = 3005;

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
  
    next();
  
  });

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/tabs', tabRoutes);

app.get("/", (req,res) => {
    res.send("Estas conectado al servidor de JS3ctarios!")
});

app.listen(defaultPort, (req,res) => {
    console.log(`Escuchando peticiones por el puerto: ${defaultPort}`)
});
