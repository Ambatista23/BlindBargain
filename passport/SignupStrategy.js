const Strategy = require('passport-local').Strategy;
const User = require('../models/User');
const connection = require('../config/connection');


const signupStrategy = new Strategy(function(first_name, last_name, username, passcode, done){
    const user = username;
});



module.exports = signupStrategy;