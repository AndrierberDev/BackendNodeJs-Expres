//Paquetes 
const express = require('express');
const morgan = require('morgan');
const pool = require('./db');
const { database } = require('./keys');


//Inicializaciones
const App = express();


//settigns
App.set('port', process.env.PORT || 2224);
//Middlewares
App.use(morgan('dev'));
App.use(express.json());


//ROUTES
    App.use(require('./routes'))
    App.use('/User',(require('./routes/Users')))
   
//Servidor
App.listen(App.get('port'), ()=>{
    console.log("Hola mundo", App.get('port'));
})
