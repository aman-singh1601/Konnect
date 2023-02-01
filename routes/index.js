const express=require('express');

//using controllers
const homeController=require('../controllers/home_controllers');


const router=express.Router();

router.get('/',homeController.home);
router.use('/users',require('./users'));
module.exports=router;