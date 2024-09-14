// //for-each doesn't return any values 

const language = ["JS","Ruby","Pearl","Python","Rust"]
const data = language.forEach((item) => {
    console.log(item)
    return item;
});
console.log(data)


// it return the values 
let  myNUm = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNUm.filter((num) => num> 5  )
console.log(newNums)

//note -- in filter method if we open the scope {} then we must write the return keyword. otherwise it shows {}, if we dont open the scope then we directly use it .
const newData = myNUm.filter( (num)=> {
  return  num > 4
}    )
console.log(newData)