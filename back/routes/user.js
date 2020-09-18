const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');

router.post('/login', (req,res,next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            const filteredUser = Object.assign({}, user.toJSON());
            delete filteredUser.password;
            return res.status(200).json(filteredUser);
        });
    })(req,res,next);
});

router.post('/', async (req,res,next) => {
    try{
        const exUser = await db.User.findOne({
            where:{
                userId : req.body.id,
            },
        });
        if(exUser){
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            userId : req.body.id,
            password : hashedPassword,
            name :  req.body.name,
            phone : req.body.phone,
            email : req.body.email,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    }catch(e){
        console.error(e);
        return next(e);
    }
});

module.exports = router;