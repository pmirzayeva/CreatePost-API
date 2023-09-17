const baseUrl="https://blog-api-t6u0.onrender.com"

const getPosts= async ()=>{
    try {
        const response = await fetch(baseUrl + "/posts", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });
    
        const data = await response.json();
    
        return data;
      } catch (err) {
        console.log("err", err);
      }
}
//  getPosts()


const createPost= async (form)=>{

   try{
       const response=await fetch(baseUrl+"/posts",
       {method:"POST",
       headers:{ "Content-Type": "application/json"},
       body: JSON.stringify(form)})

       const data=await response.json()
       console.log(data);

       return data
   }catch(err){
       console.log(err);
   }
}


//  createPost({title:"Post3",body:"lorem pisum"})


const updatePost= async (id,form)=>{

   try{
       const response=await fetch(baseUrl+"/posts/"+id,
       {method:"PUT",headers:{ "Content-Type": "application/json"},body: JSON.stringify(form)})



       const data=await response.json()
       console.log(data);

       return data
   }catch(err){
       console.log(err);
   }
}

//  updatePost(101,{title:"post444",body:"lroemmmmmmmmmmm"})


const rmvPost= async (id)=>{
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    const data = await response.json();

    console.log("data", data);

    return data;
  } catch (err) {
    console.log("err", err);
  }
}
