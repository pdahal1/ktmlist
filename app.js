const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
const passport = require('passport-local');
const { mongoose } = require('./config/database.js');
const path = require ("path"); 
//var expenseController = require('./controllers/expenseController.js');
var registrationController = require('./routes/registrationController.js');
var userController = require('./routes/userController.js');
var entryController = require('./routes/entryController'); 
var listingController = require('./routes/listingController');

//const port = process.env.PORT || 8080; 
 const port = process.env.PORT||8081; 

var app = express(); 
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen ( port , () => console.log('app fired up at port 3000 ok')); 
//app.listen ( 3000 , () => console.log('app fired up at port 3000 ok')); 
//app.use('/expenses', expenseController);
// app.use('/users', userController);
app.use('/register', registrationController ); 
// app.use('/entries', entryController); 
// app.use('/listings', listingController);
 app.use('/', express.static(path.join(__dirname, 'public'))); 
// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });