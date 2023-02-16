const User=require('../models/user');
module.exports.home=function(req,res){
    return res.render('home',{
        title: "Home"
    });
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:'sign in'
    });
}
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:'sign up'
    });
}

module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user'); return ;}
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in finding user'); return ;}
                return res.redirect('/');
            });
        }else return res.redirect('back');
    })
}

module.exports.createSession=function(req,res){
    //todo
}