let images = ['Новая папка/car.jpg', 'Новая папка/car2.jpg', 'Новая папка/car3.jpg'];

let slider = document.querySelector('.slider');
let img = document.querySelector('#img');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let i = 0;

img.src = images[i];
img.height = 400;

right.addEventListener('click', (event) => {
    event.preventDefault();
    img.src = images[i];
    i++;
    if (i == images.length) {
        i = 0;
    }
})
left.addEventListener('click', (event) => {
    event.preventDefault();
    img.src = images[i];
    i--;
    if (i == 0) {
        i = images.length - 1;
    }
})