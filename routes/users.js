const express=require('express');

const usersControllers=require('../controllers/users_controllers');

const router=express.Router();
router.get('/',usersControllers.users);



module.exports=router;