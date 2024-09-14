//maps is a callback functions 

const myNum = [1,2 ,3,4 ,5 ,6 ,7 ,8 ,9 ,10]
// const newNums = myNum.map((num)=> num + 10)

// // chaining 
// in filter we check the which value we want to return basically it worka as conditions
const newNums = myNum
                   .map((num)=> num*10)
                   .map((num)=> num+1)
                   .map((num)=> num*2)
                   .filter((num)=> num<=140)
 
console.log(newNums);


