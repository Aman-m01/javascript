// const clock = document.getElementById('clock')
// setInterval(function(){
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
// },1000)

const clockEl = document.querySelector('#clock')
setInterval(function(){
    const date = new Date();
    clockEl.innerHTML = date.toLocaleTimeString();
    

},1000)