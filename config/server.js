const express = require('express');
const app = express();
const port = 4343;

//View engine set
app.set('view engine', 'ejs');

//Public files
app.use(express.static('src/public'));

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))

//Routes
const consign = require('consign');
consign()
    .include('config/dataBase.js')
    .include('src/controllers')
    .include('src/models')
    .include('src/routes')
    .into(app)

module.exports = {app, port};