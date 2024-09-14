// const h1 = document.querySelector('#h1')
// const body = document.body
// const button = document.querySelector('#btn')

// function changeColor(){
//     const changeColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     h1.innerHTML = changeColor
//     body.style.backgroundColor = changeColor;

// }

// button.addEventListener('click',changeColor)



// // ANOTHER METHOD 
const h1 = document.querySelector('#h1')
const body = document.body;
const button = document.querySelector('#btn')
const color_name = document.querySelector('.current_color')

function randomColorGenerator() {
   const red = Math.floor(Math.random() * 256)
   const green = Math.floor(Math.random() * 256)
   const blue = Math.floor(Math.random() * 256)
   const randomColor = `rgb(${red},${green},${blue})`
   return randomColor;
}

button.addEventListener('click', () => {
   // const changeColor = randomColorGenerator()
   //  console.log(randomColor);
   body.style.backgroundColor = randomColorGenerator()
   color_name.innerText = randomColorGenerator()
})
