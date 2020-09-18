const passport = require('passport');
const local = require('./local');
const db = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        try{
            const user = await db.User.findOne({
                where:{userId:id},
            });
            done(null, user);
        }catch(e){
            console.error(e);
            done(e);
        }
    });

    local();
};