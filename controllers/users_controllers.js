const User=require('../models/user');

module.exports.users=function(req,res){
User.findById(req.params.id,function(err,user){
    return res.render('users',{
        title: 'profile',
        profile_user:user
     });
})
                
}

module.exports.update=async function(req,res){
  
    if(req.user.id=req.params.id){
        try{ 
      let user=await User.findById(req.params.id);
      User.uploadedAvatar(req,res,function(err){
            if(err){
                console.log("****Multer Error : ",err);
            }
            user.name=req.body.name;
            user.email=req.body.email;
            if(req.file){
                user.avatar=User.avatarPath+ '/' +req.file.filename;
            }
            user.save();
            return res.redirect('back');
      });
    }catch(err){
        console.log('Error ',err);
        return;
      }
    }else {
        return res.status(401).send('unauthorized');
    }
 
}

