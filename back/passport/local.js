const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, async (id, password, done) => {
    try {
      const user = await db.User.findOne({
        where: { userId : id },
      });
      if (!user) {
        return done(null, false, { reason: '존재하지 않는 아이디입니다!' });
      }
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user);
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
    } catch (error) {
      console.error(error);
      return done(error);
    }
  }));
};