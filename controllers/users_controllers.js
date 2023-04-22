const User=require('../models/user');
module.exports.users=function(req,res){
User.findById(req.params.id,function(err,user){
    return res.render('users',{
        title: 'profile',
        profile_user:user
     });
})
                
}

