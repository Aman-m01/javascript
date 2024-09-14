// object part-2
// how to make objects singleton and how to declare it using constructor

// const twiteer_user = new Object() //singleton object
const tinder_user = {}// non-singleton object
tinder_user.id = "123ABC",
    tinder_user.Name = "Romeo",
    tinder_user.isLoggedIn = false

// console.log(tinder_user)

const twiteer_user = {
    email: "ak@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Aman",
            lastName: "Maurya"

        }
    }
}
// console.log(twiteer_user.fullName.userFullName.firstName) //--> if the data not exist then we use ? for secure the data

//merge objects -- object assign 
const obj1 = {
    1: "A",
    2: "B"
}
const obj2 = {
    3: "A",
    4: "B"
}
// const obj3 = { obj1 , obj2}
// const obj3=  Object.assign({},obj1 , obj2)
const obj3 = { ...obj1, ...obj2 } // ** using spread operators 
console.log(obj3)



// //extra 
const myUser = [
    [
        {
            id: 1,
            email: "A@gmail.com "
        },
        {
            id: 1,
            email: "A@gmail.com "
        },
        {
            id: 1,
            email: "A@gmail.com "
        },
    ]
]


// vvi 
// console.log(tinder_user)
// console.log(Object.keys(tinder_user)) //datatype -- string 
// console.log(Object.values(tinder_user)) //datatype -- string
// console.log(Object.entries(tinder_user)) // datatype-- Arrays
// console.log(tinder_user.hasOwnProperty('isLoggedIn')) 


const course = {
    courseName: "js frontend",
    price: 999,
    courseInstructor: "Hitesh Sir"
}
console.log(course.courseInstructor)


//object destructor
// const{price} = course  // another-methods
// console.log(price)
// const{courseInstructor : instructor} = course  // another-methods
// console.log(instructor)

