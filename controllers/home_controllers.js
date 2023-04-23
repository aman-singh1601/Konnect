const User=require('../models/user');
const Post=require('../models/post');

module.exports.home=function(req,res){ 
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        User.find({},function(err,users){
            return res.render('home',{
                title: " Home",
                posts:posts,
                all_users:users
            });
        })
       
    })

}

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('user_sign_in',{
        title:'sign in'
    });
}
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
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
  return res.redirect('/');
}

module.exports.destroySessioin=function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}