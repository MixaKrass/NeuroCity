const video = document.querySelector('.video'); // находим наше видео
let timer = document.querySelector('.video__timer'); // находим таймер


const setTime = () => {
  // настраиваем корректное отображение времени

  const minutes = Math.floor(video.currentTime / 60); // до минуты видео не доходит :(
  const seconds = Math.floor(video.currentTime - minutes * 60);
  const msec = Math.floor(video.currentTime * 100);
  
  timer.textContent = `${minutes}:${seconds}:${msec}`;
}

// по окончанию останавливается и возвращается на начальный кадр
const endVideo = () => {
  video.currentTime = 0
}

// плей/пауза
const play = () => {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

// вешаем слушателей
video.addEventListener ('click', play);
video.addEventListener('timeupdate', setTime);
video.addEventListener('ended', endVideo);