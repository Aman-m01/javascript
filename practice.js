// console.log("Hello world!")

// founder og js --> Brandend eich 
// variables in js --> let , const and var 
// here we can change the value of let and var but const value cannot be changed 
// we dont use var because it creates a problem in functional scoping.

// let userName = "Aman"
// const userName1 = "Aman"
// var userName2 = "Aman"
// userName1 = "sumit" // throw an error because const value cannot be changed after initialized 
// console.log(userName1)

// //DATATYPE 
// let user = "Aman" //string
// let n = 10        // number
// let users = ["rohan" , "mohan" , 23, 2434,3] //object
// let isLogged = true  //boolean
// let float = 23.234   //number
// let value = null  // object
//  console.log(`the datatype of user: ${typeof user}, n is: ${typeof n} , users is: ${typeof users} , isLogged is: ${typeof isLogged} and float is:${typeof float}`)
//  console.log(typeof value)


// // CONVERSION IN JS 
// let num = 23 
// console.log(`num: ${num} \n typeof num: ${typeof num}` )
// let convertInStr = String(num)
// console.log(`convertInStr: ${convertInStr} \n typeof ConvertInStr: ${typeof convertInStr}`)

// let isLogged = 1 
// console.log(typeof isLogged)
// let booleanIsLogged = Boolean(isLogged)
// console.log(typeof booleanIsLogged)

// let isLoggedIn = true
// console.log(typeof isLoggedIn)
// let changeInNum = Number(isLoggedIn)
// console.log(typeof changeInNum)

// let val = 3434
// let chaneInNegative = -val
// console.log(chaneInNegative)

// console.log("2"+4)  // 24 
// console.log(5+"4")  // 9 
// console.log(5+5+"4")  //104
// console.log("4"+5+5)  //455

// console.log(true);  //true 
// console.log(+"");  //0

// console.log("2">1)  //true
// console.log("02">1)  //true
//  console.log('4'===4) //false
// console.log(null > 0) //false
// console.log(null == 0)  //false
// console.log(null >= 0)   //true
// console.log( undefined > 0)  //false
// console.log( undefined == 0) //false
// console.log( undefined >= 0) //false

//STRING IN JS 
// const name= "Aman Kumar"
// const roll_no=10
// console.log(name+roll_no+" CSE")
// console.log(`hello my name is ${name} and roll_no is ${roll_no}`)

// const newName=new String('Aman Maurya')
// console.log(newName[1])
// console.log(newName.__proto__) //object

// // STRING METHODS 
// const newName=new String('Aman Maurya')
// console.log(newName.length)   //11
// console.log(newName.toUpperCase())  //AMAN MAURYA
// console.log(newName.charAt('5'))  //M
// console.log(newName.indexOf('M'))  //5
// const newName1=newName.substring(0,4)  
// console.log(newName1)     //Aman

// const personName = newName.slice(-8,-2)
// console.log(personName)   

// const newPersonName="     aman    "
// console.log(newPersonName)
// console.log(newPersonName.trim())   //aman

// const url="htttps://www.youtube%20.com"
// console.log(url.replace('%20','_'))

// const country="India_jay_hind"
// console.log(country.split('_'))

// let userName= "Aman Kumar"
// console.log(userName)
// console.log(userName.bold())
// console.log(userName.at())
// console.log(userName.big())
// console.log(userName.blink())
// console.log(userName.charAt())
// console.log(userName.fontcolor('red'))
// console.log(userName.fontsize("23px"))
// console.log(userName.repeat())
// console.log(userName.trim())


// NUMS AND MATHS 
// const score = 400
// console.log(score)   // output=> 400

// const balance = new Number(100)
// console.log(balance)   //output=> [number: 100]
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(typeof balance)

// const hundreds =10000000
// console.log(hundreds.toLocaleString())  
// console.log(hundreds.toLocaleString('en-IN'))  //indian standard 
// // we can check min-value ,maxx-value and other methods in console 

// console.log(Math)
// console.log(Math.abs(-5)) // absolut value -- output=>5
// console.log(Math.round(5.26)) // roundof --  output=>6
// console.log(Math.ceil(4.2)) // two methods are used-- ceil & floor

// console.log(Math.floor(4.6)) 
// console.log(Math.sqrt(16)) // output=>4
// console.log(Math.min(4.6,45,66,443,1.3,3)) // min value=>1.3
// console.log(Math.max(4.6,34,4345.4,54656,55665654,34))

// console.log(Math.random())  //its gives value b/w 0 to 1 

// console.log((Math.random()*10 )+ 1) 
// console.log((Math.floor(Math.random()*10 )) + 1) 

// // //trick  
// const min=20
// const max=30
// console.log(Math.floor(Math.random()*(max - min + 1))+ min)
// console.log(Math.floor(Math.random()*255))

// //DATE IN JS
// let myDate = new Date()
// console.log(myDate)  /// type-> object
// console.log(myDate.toString()) 
// console.log(myDate.toDateString()) 
// console.log(myDate.toLocaleString()) 
// console.log(myDate.toTimeString()) 
// console.log(myDate.toJSON()) 
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleDateString())

// let createNewDate = new Date(2024,2,11)
// let createNewDate1 = new Date(2024,2,11 ,9,27)
// console.log(createNewDate.toLocaleString())
// console.log(createNewDate.toDateString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

// // ARRAY IN JS 
// const myArr1 = [1,2,3,4,5,6,77]
// const Friend = ["Aman" ,"Anshu" ,"Abhishek"]
// console.log(myArr1)
// console.log(myArr1[0])
// console.log(myArr1[1])
// console.log(myArr1[2])
// console.log(myArr1[3])
// console.log(myArr1[40])  // undefined

// let newArray = [1,2,3,4,5,6,77]
// for (let i = 0; i < newArray.length; i++) {
//     const element = newArray[i];
// console.log(element)
// }

const myArr2 = [1,2,3,4,5,6,77]
// myArr2.push(8999)
// myArr2.push(7777)
// console.log(myArr2)
// console.log(myArr2.pop())
// console.log(myArr2)
// myArr2.unshift(3)
// myArr2.shift()
// console.log(myArr2.includes(999900)) 
// console.log(myArr2.indexOf(9))
// console.log(myArr2.indexOf(2))
// console.log(myArr2)

// //Slice and Splice Array methods 
// const myArr = [1,2,3,4,5,6,7]
// console.log(myArr.slice(0 , 4))
// console.log(myArr)

// console.log(myArr.splice(0 , 4))
// console.log(myArr)

// const marvel_heroes = ["thor", "iron-man", "captain"]
// const dc_heroes = ["flash", "saktiman", "hulk"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2])
// console.log(marvel_heroes.concat(dc_heroes))

// let num =100
// let num1 =200
// let num2=300
// console.log(Array.of(num,num1,num2))
// console.log(typeof (Array.of(num,num1,num2)))










