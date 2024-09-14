const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
}
updateCounter();


textareaEl.addEventListener('keyup', () => {
    updateCounter();
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
})