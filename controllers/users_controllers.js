const User=require('../models/user');

module.exports.users=function(req,res){
User.findById(req.params.id,function(err,user){
    return res.render('users',{
        title: 'profile',
        profile_user:user
     });
})
                
}

module.exports.update=function(req,res){
    if(req.user.id=req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body,function(err,user){
            return res.redirect('back')
        });
    }else {
        return res.status(401).send('unauthorized');
    }
}

