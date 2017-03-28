const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// make sure this line always appears before the routes
app.use(bodyParser.json());
app.use(express.static('static'))

const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/rest-api';
// this line above creates the database
mongoose.connect(mongoUrl);
const pirateModels = require('./src/pirate.model');


app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});


const routes = require('./src/pirate.routes.js');
const appRoutes = routes(app);


app.listen(3001);
console.log('Server running at http://localhost:3001/');



