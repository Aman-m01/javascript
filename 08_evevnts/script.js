//events in js --> both of the below are events like click but they have a different usecase.
// keypress event 
// mouseover event
// mouseout event
// mousemove event
// mouseup event
// other ...

const body = document.body
const btn = document.querySelector('.btn')
const dataEl = document.querySelector('#data')

btn.addEventListener('mouseover', () => {
     dataEl.innerHTML = "mouseover event occured!!"
    console.log("mouseover event occured!!")
})

btn.addEventListener('mouseleave', () => {
    console.log("mouseleave event occured!!")
})

body.addEventListener('keypress', function (e) {
    console.log(e.key)
})