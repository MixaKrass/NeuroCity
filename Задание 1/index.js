let index = 1;  //задаём индекс слайда по умолчанию
const prev = document.getElementById('prev'); // находим кнопку назад
const next = document.getElementById('next'); // находим кнопку вперёд



// функция следующего слайда
const nextSlide = () => {
  showSlide (index += 1);
}

// функция предыдущего слайда
const prevSlide = () => {
  showSlide (index -= 1);
}

// функция установки актуального слайда
const actualSlide = (n) => {
  showSlide (index = n);
}

// функция, отвечающая за работу слайдера
const showSlide = (n) => {
  let i;
  const slide = document.getElementsByClassName('slider__item');
  if (n > slide.length) {
    index = 1
  }

  if (n < 1) {
    index = slide.length
  }

  for(i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }

  slide[ index - 1 ].style.display = 'block';
}

showSlide(index);
next.addEventListener( 'click', nextSlide);
prev.addEventListener( 'click', prevSlide);