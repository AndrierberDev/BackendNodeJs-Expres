const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const pool = require('../db');

//Renderizacion de rutas

router.get('/signup', (req, res) => {
    res.render('User/signup');
});

router.get('/login',(req, res)=>{
    res.render('User/login')
});

router.get('/getdates', (req, res)=>{
    res.render('User/getdates');
})
// ******************************************************************

//Registro y Inicio de secion

router.post('/signup', (req, res) => {
  
    const{
        Name_client,
        Lastname_client,
        Email_client,
        Password_client
     
    } = req.body;

  
  bcrypt.hash(Password_client, 10, (err, results)=>{
        const newUsers = {
            Name_client: Name_client,
            Lastname_client :Lastname_client,
            Email_client: Email_client,
            Password_client : results
        }

        pool.query('INSERT INTO client set ?', [newUsers], function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
        });
      
    });

       

  
  
});

router.post('/login', (req, res)=>{
    
    const { Email_client, Password_client} = req.body;

    const ClientEmail ={ Email_client : Email_client}
    
    pool.query('SELECT Password_client FROM client WHERE Email_client = ?', [ClientEmail], function (error, results, fields) {
        if (error) throw error;

        bcrypt.compare(Password_client, results, (err, results)=>{

            if(results = true){
                return res.send({ error: false, data: results, message: 'Inicio con exitop' });

            } else{
                return res.send({ error: false, data: results, message: 'Inicio malo' });

            }
        
               
            
        });
        

    });
});

//************************************************************************/


//          Obtencion de datos

router.get('/getdates/all', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT * FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/getdates/id', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Id_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/getdates/name', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Name_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/getdates/lastname', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Lastname_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/getdates/phone', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Phone_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

//******************************************************* */

// Actualizacion de datos

router.put('/putdates/all', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT * FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});

router.put('/putdates/id', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Id_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});

router.put('/putdates/name', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Name_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});

router.put('/putdates/lastname', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Lastname_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});

router.put('/putdates/lastname', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Lastname_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});

router.put('/putdates/lastname', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Lastname_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});



router.put('/putdates/phone', (req, res)=>{
    const { Email_clients } = req.body;
    pool.query('SELECT Id_clients, Name_clients, Lastname_clients FROM clients WHERE Email_clients = ?',[Email_clients], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
});

//******************************************************** */

module.exports = router;