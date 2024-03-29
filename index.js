const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const express=require('express');
const app=express();
const port=8000;

//using express layouts
const expressLayouts=require('express-ejs-layouts');
//requiring the database in config
const db=require('./config/mongoose');

//using express session and passport for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

const passportJwt=require('./config/passport-jwt-strategy');

//requiring the mongo store
const MongoStore=require('connect-mongo');

//requiring sass middleware
const sassMiddleware = require('node-sass-middleware');

//requiring connect-flash
const flash=require('connect-flash');
const customMware=require('./config/middleware');

app.use(sassMiddleware({
    /* Options */
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix:  '/css'  
}));

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

app.use('/uploads',express.static(__dirname + '/uploads'));

app.use(expressLayouts);

//extract style and srcipts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'user_id',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/Konnect_developpment',
        autoRemove: 'disabled'
      })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
//using connect - flash
app.use(flash());
app.use(customMware.setFlash)

//using express router
app.use('/',require('./routes'));

app.listen(port , function(err){
if(err){
    console.log(`error in running the server : ${port}`);
   
} 
console.log(`server is running on port : ${port}`);
});