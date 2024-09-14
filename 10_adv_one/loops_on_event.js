// // we can any of the loops
const new_btn = document.querySelectorAll('new_btn')

const buttons = document.querySelectorAll('button')
buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = 'red'
        e.target.style.color = 'yellow'
        
    })
})

// for(let button of buttons){
//     button.addEventListener('click',function(e){
//         console.log(e.target)
//         console.log(e.currentTarget)
//     })
// }


// for(let button of buttons){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//     })
// }

// for(let i=0 ; i < buttons.length ;i++){
//     buttons[i].addEventListener('click',function(){
//            console.log(this)
//     })
// }

// buttons.forEach(function(e){
//     e.addEventListener('click',function(){
//         console.log(this)
//     })
// })


// if we use 'this' during arrow function then it show the 'window 'object not the element which is include.