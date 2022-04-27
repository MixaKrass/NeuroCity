const btn = document.querySelector('.button'); // выбираем кнопку
const list = document.querySelector('.list'); //Поле для элементов

// вводим элементы
const firstElem = () => {
  list.innerHTML += `<div class='list__el'></div>`
}

const secondElem = () => {
  list.innerHTML += `<div class='list__el'></div>`
}

const thirdElem = () => {
  list.innerHTML += `<div class='list__el'></div>`
}

// функция, отвечающая за отрисовку элементов
const openEl = () => {
  if (list.innerHTML === '') {
    firstElem();
    secondElem();
    thirdElem();
  } else {
    list.innerHTML = ''
  }
};

// обработчик клика по кнопке
btn.addEventListener('click', openEl);