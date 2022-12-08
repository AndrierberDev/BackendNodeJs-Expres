const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const pool = require('../db');

//Renderizacion de rutas

router.get('/signup', (req, res) => {
    res.render('User/signup');
});

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