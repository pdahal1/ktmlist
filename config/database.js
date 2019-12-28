const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost:27017/authentication', (err) => {
mongoose.connect('mongodb://param:param5@ds027385.mlab.com:27385/heroku_c60wcp0z', (err) => {
    if (!err) {
        console.log('connected successfully');
    } else {
        console.log('cannot connect to the database' + JSON.stringify(err, undefined, 2));
    }
});

module.exports =  mongoose ;