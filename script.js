let images = ['img/car.jpg', 'img/car2.jpg', 'img/car3.jpg'];

let slider = document.querySelector('.slider');
let img = document.querySelector('#img');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let indicators = document.querySelector('#indicators');
let indicator;

// Создаем индикаторы и добавляем на страницу
images.forEach((link, index) => {
    indicator = document.createElement('li');
    indicator.classList.add('indicator');
    indicators.appendChild(indicator);
})

// Получить индикаторы из DOM
indicator = document.querySelectorAll('.indicator');

let i = 0;

// Устанавливаем на страницу первое изображение из массива
img.src = images[i];
// Задаем высоту изображениям
img.height = 400;

// Функция выделения активного индикатора
function indicatorActivate(i) {
    for(let i = 0; i<images.length; i++) {
        indicator[i].classList.remove('active');
    }
    indicator[i].classList.add('active');
}

right.addEventListener('click', (event) => {
    event.preventDefault();
    i++;
    if (i == images.length) {
        i = 0;
    }
    img.src = images[i];
    indicatorActivate(i);
})
left.addEventListener('click', (event) => {
    event.preventDefault();
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    img.src = images[i];
    indicatorActivate(i);
})