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
    //todo
}

module.exports.createSession=function(req,res){
    //todo
}