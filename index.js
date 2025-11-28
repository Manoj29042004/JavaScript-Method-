//GET - Method
fetch("http://localhost:3000/data", { method: "GET" })
  .then(res => res.json())
  .then(data => console.log("Initial Data:", data))
  .catch(err => console.log(err));

//POST - Method
fetch("http://localhost:3000/data", {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    id: "5",
    name: "Rajesh"
  })
})
  .then(res => {
    console.log("POST:", res.status, res.statusText);
    return fetch("http://localhost:3000/data");
  })
  .then(res => res.json())
  .then(data => console.log("After POST:", data))
  .catch(err => console.log(err));


//PATCH - Method
fetch("http://localhost:3000/data/5", {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    name: "Ganesh"
  })
})
  .then(res => {
    console.log("PATCH:", res.status, res.statusText);
    return fetch("http://localhost:3000/data");
  })
  .then(res => res.json())
  .then(data => console.log("After PATCH:", data))
  .catch(err => console.log(err));


// PUT - Method
fetch("http://localhost:3000/data/5", {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    name: "Mahesh"
  })
})
  .then(res => {
    console.log("PUT:", res.status, res.statusText);
    return fetch("http://localhost:3000/data");
  })
  .then(res => res.json())
  .then(data => console.log("After PUT:", data))
  .catch(err => console.log(err));


//DELETE - Method
fetch("http://localhost:3000/data/5", { method: "DELETE" })
  .then(res => {
    console.log("DELETE:", res.status, res.statusText);
    return fetch("http://localhost:3000/data");
  })
  .then(res => res.json())
  .then(data => console.log("After DELETE:", data))
  .catch(err => console.log(err));

//DELETE_ALL
fetch("http://localhost:3000/data").then(res=>res.json())
.then(data=>{
    for(var i=0; i<data.length; i++){
        fetch(`http://localhost:3000/data/${data[i].id}`,{"method":"DELETE"})
        .then(res=>{
            if(res.ok){
                console.log(res.status,res.statusText);
            }
            else{
                console.log("Deletion was not successful");
            }
        }).catch(err=>console.log(err)
        )
    }
});

//POST_Multiple
let data = [
    {
        "id" : "1",
        "name" : "Manoj"
    },
    {
        "id" : "2",
        "name" : "Kishore"
    },
    {
        "id" : "1",
        "name" : "Suresh"
    },
    {
        "id" : "1",
        "name" : "Durga"
    }
]

for(var i=0; i<data.length; i++){
    obj = data[i];
fetch("http://localhost:3000/data",
    {method:"POST",
    headers: {
        "content-type":"appliction/json"
    },
    body:JSON.stringify(obj)
    })
    .then(res=>{
            if(res.ok){
                console.log(res.status,res.statusText);
            }
            else{
                console.log("Posting was not successful");
            }
        }).catch(err=>console.log(err))
}