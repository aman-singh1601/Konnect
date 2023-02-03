const mongoose=require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost/Konnect_developpment');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting to the mongodb"));

db.once('open',function(){
console.log('connected to database : MongoDB');
});

module.exports=db;