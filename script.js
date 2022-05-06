'use strict'
// Selectors
const square1 = document.querySelector('.patrat1');
const square2 = document.querySelector('.patrat2');

// Functions
const randomColor = () => {
    let r = (Math.random() * 256).toFixed();
    let g = (Math.random() * 256).toFixed();
    let b = (Math.random() * 256).toFixed();
    let bgColor = `rgb(${r}, ${g}, ${b})`;
    return bgColor;
}

square1.addEventListener('click',() => {
    square2.style.backgroundColor = randomColor();
})

square2.addEventListener('click',() => {
    square1.style.backgroundColor = randomColor();
})