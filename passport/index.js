const passport = require('passport');
const connection = require('../config/connection')



// import all the strategies that we want
const SigninStrategy = require('./SigninStrategy');
const SignupStrategy = require('./SignupStrategy');


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);


module.exports = passport;