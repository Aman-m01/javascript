// conversion of datatype 

let roll_no="34";
console.log(typeof roll_no);  //string
let convertInNum=Number(roll_no)
console.log(typeof convertInNum);   // number

// let ak= true // "aman",undefined,null.22
// let convertInNum=Number(ak)
// console.log(typeof convertInNum);
// console.log(convertInNum)

// note 
// "33"=>33
//"33abc"=> NaN
//true=>1, false=>0


// let isLoggedIn= 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log( typeof booleanIsLoggedIn);

// 1=> true ; 0=> false
// " "=> false
//" Aman"=> true 


// let number=2333;
// let convertToString = String(number);
// console.log(convertToString)
// console.log( typeof convertToString)  // string

//------------------opeartions--------------

// let value=4
// let negValue = -value
// // console.log(negValue)

// let str1= "Aman"
// let str2= " Maurya"
// let  str= str1 +str2
// console.log(str)

// console.log("2"+4)
// console.log(5+"4")
// console.log(5+5+"4")
// console.log("4"+5+5)

// console.log(true);
// console.log(+"");

// prefix and suffix 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

console.log(`hello ${"aman"} , nice to meeet you ${4+8} `)

