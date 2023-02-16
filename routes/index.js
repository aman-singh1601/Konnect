const express=require('express');

//using controllers
const homeController=require('../controllers/home_controllers');


const router=express.Router();

router.get('/',homeController.home);
router.get('/sign-in',homeController.signIn);
router.get('/sign-up',homeController.signUp);

router.post('/create',homeController.create);

router.use('/users',require('./users'));
module.exports=router;