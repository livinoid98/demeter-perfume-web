const express = require('express');
const app = express();
const config = require('./config/config.json');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');

db.sequelize.sync();
passportConfig();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors({
    origin: true,
    credentials:true,
}));
app.use(cookieParser('demetercookie'));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:'demetercookie',
    cookie:{
        httpOnly:true,
        secure:false,
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);

app.get('/', (req,res) => {
    res.send('hello server');
});

app.listen(3065, ()=>{
    console.log('server start on localhost:3065');
});