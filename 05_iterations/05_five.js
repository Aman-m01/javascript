// for each

let coding = ["js","ruby","python","cpp"]
coding.forEach( function (item){
    console.log(item)
})


coding.forEach((value) => {
    console.log(value)
})


function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item , index , arr)=> {
    console.log(item , index , arr)
})