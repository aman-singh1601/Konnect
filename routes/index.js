const express=require('express');
const router=express.Router();
const passport=require('passport');

//using controllers
const homeController=require('../controllers/home_controllers');





router.get('/',homeController.home);
router.get('/sign-in',homeController.signIn);
router.get('/sign-up',homeController.signUp);
router.get('/sign-out',homeController.destroySessioin);

router.post('/create',homeController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/sign-in'},
),homeController.createSession);

router.use('/users',require('./users'));
router.use('/posts',require('./post'));
router.use('/comments',require('./comment'));

router.use('/api',require('./api'));

module.exports=router;