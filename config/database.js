const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost:27017/authentication', (err) => {
    //below is the correct database for mlab
mongoose.connect('mongodb://param:param5@ds027385.mlab.com:27385/heroku_c60wcp0z', (err) => { 
 //mongoose.connect('mongodb+srv://param:param@cluster0-spkms.mongodb.net/registrations?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log('connected successfullys');
    } else {
        console.log('cannot connect to the database' + JSON.stringify(err, undefined, 2));
    }
});

module.exports =  mongoose ;