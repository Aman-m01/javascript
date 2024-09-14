// for loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// //while loop 
// while (condition) {

// }


// //do-while loop 
// do {

// } while (condition);


for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("it is 5 ")
    }
    console.log(element)
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //    console.log( `Inner loop value ${j} and Inner loop is ${i}`);
        console.log(i + '*' + j + '=' + i * j);
    }
}


let myArr = ["saktiman", "batman", "superman"]
console.log(myArr.length)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
}


// //break and continue 
for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        continue;
    }
    if (i == 18) {
        console.log("found number 18")
        break;
    }
    console.log(i)
}


// // do while loop 
let index = 0
while (index <= 10) {
    console.log(`value of index is: ${index}`);
    index = index + 2;
}


let myArr1 = ["Aman", "Anshu", "Abhishek", "rohan"]
let arr = 0
while (arr < myArr1.length) {
    console.log(`value is ${myArr1[arr]}`);
    arr++;
}


// //do while -- here work performed firstly then check the condition 
let score = 1
do {
    console.log(`score is : ${score}`)
    score++
} while (score <= 10);


// //while loop practice 
// let index1 = 1
// while(index1<=10){
//     console.log(index1)
//     index1++
// }


// //for loop practice 
for (let i = 1; i <= 10; i++) {
    console.log(`value of i is ${i}`)
}


// // do-while loop practice 
let i = 15
do {
    console.log(`value is:${i}`)
    i++
} while (i <= 10)