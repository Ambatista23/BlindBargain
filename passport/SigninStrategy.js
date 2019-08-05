const Strategy = require('passport-local').Strategy;
const connection = require('../config/connection');

const signinStrategy = new Strategy(function(first_name, last_name, username, passcode, done){
    User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(passcode)) { return done(null, false); }
        return done(null, user);
});
})




module.exports = signinStrategy;