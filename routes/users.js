const express=require('express');
const passport = require('passport');

const usersControllers=require('../controllers/users_controllers');

const router=express.Router();
router.get('/:id',passport.checkAuthentication,usersControllers.users);



module.exports=router;