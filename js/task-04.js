const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const calcValue = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    calcValue.textContent = counterValue;
    console.log(counterValue);
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    calcValue.textContent = counterValue;
    console.log(counterValue);
})
