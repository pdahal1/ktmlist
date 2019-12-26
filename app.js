const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
const passport = require('passport-local');
const { mongoose } = require('./config/database');
const path = require ("path"); 
var registrationController = require('./routes/registrationController.js');
const port = process.env.PORT || 8080; 

const app = express(); 
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use( express.static(path.join(__dirname, 'public')));
 
app.use('/register', registrationController ); 

app.get('/', (req, res) => {
    res.send('invaild endpoint');
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.listen(port, () => {
  console.log('app fired up on ' + port);
});