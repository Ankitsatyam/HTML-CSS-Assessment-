let number = document.querySelector("#count")
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const clear = document.querySelector(".clear");


var value = parseInt(number.innerText);
value = 0;
number.innerText = value;

function increment() {
    value = parseInt(number.innerText);
    value += 1;
    number.innerText = value;
}

function decrement() {
    value = parseInt(number.innerText);
    value -= 1;
    number.innerText = value;
}

function reset() {
    value = parseInt(number.innerText);
    value = 0;
    number.innerText = value;
}


increase.addEventListener('click', increment);
decrease.addEventListener('click', decrement);
clear.addEventListener('click', reset);