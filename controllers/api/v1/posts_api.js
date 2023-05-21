const Post=require("../../../models/post");
const Comment=require("../../../models/comment");


module.exports.index=async function(req,res){

     let posts= await Post.find({})
    .sort('-createdAt')
    .populate('user').
    populate({
        path:'comments',
        populate:{
            path:'user'
        }
    });

    return res.json(200,{
        message:"Lists of posts",
        posts:posts
    });
}

module.exports.destroy= async function(req,res){
    try{
        let post=await Post.findById(req.params.id);
        // if(post.user==req.user.id){
           post.remove();
           await Comment.deleteMany({post:req.params.id});
        //    if(req.xhr){
        //     return res.status(200).json({
        //         data:{
        //             post_id:req.params.id
        //         },
        //         message: " post deleted!"
        //     });
        //}
           return res.status(200).json({
            message:"post deleted"
           });
        // } else
        //    return res.redirect('back');
    }catch(err){
        console.log('Error ',err);
        return res.status(200).json({
            message:'internal server error'
        });
    }
}