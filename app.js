const express = require('express');
const path = require('path');
const db = require('./db/dbConnection');
const cookieParser = require('cookie-parser');

const app = express();

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.set('view engine','hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());


//Define Routes
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));


app.listen(5000,()=>{
    console.log('Server Start on port 5000');
});