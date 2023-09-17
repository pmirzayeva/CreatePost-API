console.log("getPosts", getPosts)
let fullname;
let user_avatar;
let currentPost = {};

const work=()=>{

    const panelEl=$("#panel")
    fullname=prompt("Please enter your name")
    user_avatar=prompt("Please enter your avatar")

    if(!fullname.trim()){
        alert("You have not entered your name")
        return
    }

    panelEl.removeClass("d-none")
    renderPosts()
}


async function renderPosts (){

    try{
        const postEl=$("#posts")
        const data=await getPosts()

        const content=data.reverse().map((post)=>{
            const createdTime=convertTime(post.created)
            return`<div class="card shadow">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/post-like-and-comment-2592610-2175176.png" class="card-img-top" style="object-fit: cover;" height="250" alt="${post.title}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
          <h6 class="card-subtitle mt-4 mb-3 text-muted ">${createdTime}</h6>
          <div class="d-flex align-items-center gap-2"> 
            <img class="rounded-circle shadow" width="50" height="50" style="object-fit: cover;" 
            src=
            "${post.user_avatar? post.user_avatar:"https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"}"/>
            <p class="h6">${post.fullname? post.fullname:"Anonym"}</p>
            <button class="rmvBtn border-0" value="${post.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg>
      </button>
          </div>
        </div>
    </div>`})

        postEl.html(content)
    }catch(err){
        console.log("Network error",err)
    }
}


$(document).on("click","#shareBtn",async function(){
    try{
        const title=$("#postInput").val().trim()
        const body=$("#postBodyInput").val().trim()
    
        const newPostData={
            title,
            body,
            fullname,
            user_avatar,
            created:new Date(),
        }
    
        console.log(newPostData);
        await createPost(newPostData)
        renderPosts()

        $("#postInput").val("")
        $("#postBodyInput").val("")

    }catch(err){
        console.log(err);
    }

})

$(document).on("click",".rmvBtn",async function(){

    try{
        const id=$(this).val()

        await rmvPost(id)
        renderPosts()
    }catch(err){
        console.log(err);
    }
    
})

work()