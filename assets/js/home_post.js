{
    
console.log('hello');

let createPost=function(){

    let newPostForm= $('#new-post-feed');

    newPostForm.submit(function (e){

        e.preventDefault();

        $.ajax({
            type:'post',
            url:'/posts/create',
            data:newPostForm.serialize(),
            success: function(data){
                let newPost=newPostDom(data.data.post);
                $('#post-list-continer>ul').prepend(newPost);
                deletePost($(' .delete-post-button' , newPost));

                new Noty({
                    theme: 'relax',
                    text: "Post published!",
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },
            error:function(error){
                console.log(error.responseText);
            }
        });

    });
}

//method to create a post in dom
let newPostDom = function(post){
    return $(`
    <li id="post-${post._id}" >
   <small><a class="delete-post-button" href="/posts/destroy/${post._id}">X</a></small>
   ${post.content}
<br>
<small>${post.user.name}</small>
<div id="post-comment">
   
      <form action="/comments/create" method="POST">
         <input type="text" name="content" placeholder="Add Comment..">
         <input type="hidden" name="post" value="${post._id}">
         <input type="submit" value="Comment">
      </form>
      <div id="post-comments-list">
         <ul id="post-comments-${post._id}">
         </ul>
      </div>

</div>

</li>
    `);
}

let deletePost=function(deleteLink){
    $(deleteLink).click(function(e){
        e.preventDefault();
        $.ajax({
            type: 'get',
            url: $(deleteLink).prop('href'),
            success:function(data){
                $(`#post-${data.data.post_id}`).remove();
                new Noty({
                    theme: 'relax',
                    text: "Post Deleted!",
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },
            error:function(error){
                console.log(error.responseText);
            }
        });
    })
}
createPost();
}