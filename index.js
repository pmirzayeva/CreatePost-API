console.log(baseUrl);
let fullname
let user_avatar

// const work=()=>{

//     const panelEl=$("#panel")
//     fullname=prompt("Please enter your name")
//     user_avatar=prompt("Please enter your avatar")

//     if(!fullname.trim()){
//         alert("You have not enetered your name")
//         return
//     }

//     panelEl.removeClass("d-none")
// }
// work()


async function renderPosts (){

    try{
        const postEl=$("#posts")
        const data=await getPosts()

        const content=data.reverse().map((post)=>{
            return`<div class="card shadow">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/post-like-and-comment-2592610-2175176.png" class="card-img-top" style="object-fit: cover;" height="250" alt="${post.title}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
          <h6 class="card-subtitle mt-4 mb-3 text-muted ">11:00 11.11.2023</h6>
          <div class="d-flex align-items-center gap-2"> 
            <img class="rounded-circle shadow" width="50" height="50" style="object-fit: cover;" src="${post.user_avatar? post.user_avatar:"https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"}"></img>
            <p class="h6">${post.fullname?post.fullname:"Anonym"}</p>
          </div>
        </div>
    </div>`})

        postEl.html(content)
        console.log(data);
    }catch(err){
        alert("Network error")
    }
}

renderPosts()