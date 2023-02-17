const User=require('../models/user');
module.exports.users=function(req,res){
 if(req.cookies.user_id){
        User.findOne({user_id:req.cookies.user_id},function(err,user){
            if(user){
                return res.render('users',{
                    title: 'profile',
                    user:user
                 });
            }
            else return res.redirect('/sign-in');
        })
 }else return res.redirect('/sign-in');
}

