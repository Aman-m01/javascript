// scope  -- block scope and global scope  

let a = 100  // global scope 
const b = 3333
{  // block scope 
    let a = 300
    const b = 2222
    console.log("inner: ", a)
    console.log("inner: ", b)
}
console.log(a)
console.log(b)

function one() {
    const userName = "rohan"
    function two() {
        const website = "instagram"
        console.log(userName)
    }
    two()
    one()
}
