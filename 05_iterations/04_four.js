// const myObj = {
//     js : "Javascript",
//     cpp : "C++",
//     rb : "Ruby",
//     py : "Python"
// }

// for (const key in myObj) {
//   console.log(  `${key} shortcut is for ${myObj[key]}`)
// }

// const arr = ["js","cpp","rupy"]
// for (const key in arr) {
// //   console.log(key)  

//   console.log(arr[key])  
// }

const myCoding = [

    {
        languageName : "Javascript",
        languageFileName : "JS"
    },
    {
        languageName : "Python",
        languageFileName : ".PY"
    },
    {
        languageName : "rust",
        languageFileName : ".R"
    }
]

myCoding.forEach((item)=> {
    // console.log(item)
   console.log(item.languageName);

})