const btn = document.querySelector('.button'); // выбираем кнопку
const list = document.querySelector('.list'); //Поле для элементов

// функция, отвечающая за рандомный цвет
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0;  i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// логика,отвечающая за адекватное рандомное количество элементов
let rand = getRandomEl = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// отображение
const getRandom = () => {
  let randel = rand(10, 100);
  list.innerHTML = '';
    for (let i = 0; i <= randel; i++) {
      list.innerHTML += `<div class='list__el' style="background: ${getRandomColor()} "></div>`;
    }
}

// установка слушателя
btn.addEventListener('click', getRandom);