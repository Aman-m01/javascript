const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task 
    //DB calls , cryptography, network related 
    setTimeout(function () {
        console.log("Async task is completed")
        resolve();
    }, 1000)

})

promiseOne.then(function () {
    console.log("promise consumed")
})


//promise 2 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async 2 completed ")
        resolve();

    }, 1000)
}).then(() => {
    console.log("Async 2 resolved")
})


// promise 3
const promiseThree = new Promise((resolve, request) => {
    setTimeout(() => {
        resolve({ userName: "Aman Maurya", email: "amank9thdnr@gmail.com" })
    }, 1000);

})

promiseThree.then((userName) => {
    console.log(userName)
})


// promise 4
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
                user: "Aman",
                password: 1234
            })
        }
        else {
            reject("Error : something went wrong")
        }

    }, 1000)

})


// // it throws an error
// const userName = promiseFour.then(()=>{
//     console.log(user)
//     return user.userName
// })
// console.log(userName)

const userName = promiseFour
    .then((user) => {
        console.log(user)
        return user.userName

    })
    .then((userName) => {
        console.log(userName)
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => console.log("the promise is either resolved or rejected"))



// // promise 5 
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: "javascript",
                password: 1234
            })
        }
        else {
            reject("Error :js went wrong")
        }

    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);

//     } catch(error){
//         console.log("E: ",error)
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()

    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))