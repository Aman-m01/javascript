const body = document.body
const btn = document.querySelector('#btn')
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const color_code = `rgb(${red},${blue},${green})`
  //   console.log(color_code)
  body.style.backgroundColor = color_code


}, 800)

btn.addEventListener('click', () => {
  clearInterval(intervalId)
  btn.innerText = body.style.backgroundColor
})

