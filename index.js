const express=require('express');
const app=express();
const port=8000;

//using express layouts
const expressLayouts=require('express-ejs-layouts');
//requiring the database in config
const db=require('./config/mongoose');

app.use(express.static('./assets'));

app.use(expressLayouts);

//extract style and srcipts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//using express router
app.use('/',require('./routes'));


//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port , function(err){
if(err){
    console.log(`error in running the server : ${port}`);
   
} 
console.log(`server is running on port : ${port}`);
});