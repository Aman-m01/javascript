// forof loop 
// for (const iterator of object) {
// }

//["","",""]
//[{},{},{},{}]

const arr = [12, 9, 12, 11, 0]
for (const val of arr) {
    console.log(val)
}

const str = "Aman Maurya"
for (const name of str) {
    if (name == " ") {
        continue
    }
    console.log(name)
}

// //maps ---> vvi concept
// //maps are iterable in some cases 

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('UK', "UNITED KINGDOM")
console.log(map);

for (const data of map) {
    for (const [data, value] of map) {
        console.log(data, ':-', value);
    }
}


const myObj = {
    "game1":"free fire",
    "game2":"fornite",
    "game3":"pubg"
}
for (const [data , value] of myObj) {
  console.log(data , ':-', value)
}
