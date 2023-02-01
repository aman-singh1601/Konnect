const express=require('express');
const app=express();
const port=8000;

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