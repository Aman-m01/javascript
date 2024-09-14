// //promise practice 
// new Promise((resolve , reject )=>{
//     setTimeout(()=>{
//         resolve({userName:"Aman Maurya",id:1234})
//     },1000);
// }).then((userData)=>{
//     console.log("promise is resolved :",userData)
// })

// const myPromise = new Promise((resolve , reject)=>{
//      setTimeout(()=>{
//         let error = false ;
//      if(!error){
//         resolve({name : "Aman",Branch : "CSE"})
//      }
//      else{
//         reject("Error occured")
//      }
      
//      },2000)
       
//   }) .then((Data)=>{
//     console.log("Data found: ",Data)
    
//     }).catch((error)=>{
//         console.log("Data: ",error)
//     })



// let team = ["team1" , "team2" , "team3"]

// const myNewPromise = new Promise((resolve , reject )=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//        if(team.includes("team1") && team.includes("team2") && team.includes("team3")){
//         resolve("All teams are available")
//        }
//        else{
//         reject("all teams are not available")
//        }
//         },1000)
        
//     })
// })

// myNewPromise
// .then((data)=>{
//      console.log("Data: ",data)
// })
// .catch((error)=>{
//   console.log("Error: ",error)
// })
// .finally("promise will be either rejected or resolved")




// // function returning promise ---> how to return promise through function 
function myPromise(){
let team = ["team1" , "team2" , "team3"]

 return myPromise = new Promise((resolve , reject )=>{
    
        setTimeout(()=>{
       if(team.includes("team1") && team.includes("team2") && team.includes("team3")){
        resolve("All teams are available")
       }
       else{
        reject("all teams are not available")
       }
        },4000)
        
    })
}

myPromise()
.then((data)=>{
     console.log("Data: ",data)
})
.catch((error)=>{
  console.log("Error: ",error)
})


