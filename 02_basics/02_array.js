//Array part 2 
 const marvel_heroes = ["thor", "iron-man", "captain"]
 const dc_heroes = ["flash", "saktiman", "hulk"]

 marvel_heroes.push(dc_heroes)
 console.log(marvel_heroes);
 console.log(marvel_heroes[3][2])
console.log(marvel_heroes.concat(dc_heroes))

const concat1 = marvel_heroes.concat(dc_heroes)
console.log(concat1)


// //spread operator 
const all_newHeroes = [...marvel_heroes , ...dc_heroes]
console.log(all_newHeroes)

const new_Array = [12,3,4,5,[7,6,5],[45,54,4,[34,54]]]
console.log(new_Array)

// // use flat method 
const another_new_Array = new_Array.flat(Infinity)
console.log(another_new_Array)

// console.log(Array.isArray("Aman")) // it is used to ask this is array or not 
// console.log(Array.from("Aman")) // it is used to convert into arrays 
// console.log(Array.from({Name : "Aman"})) // ** it gives empty array 

let num =100
let num1 =200
let num2=300
console.log(Array.of(num,num1,num2))
console.log(typeof (Array.of(num,num1,num2)))




















































































































































































































