const User=require('../models/user');
module.exports.users=function(req,res){

                return res.render('users',{
                    title: 'profile'
                 });
                }

