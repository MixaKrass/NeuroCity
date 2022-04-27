const getBtn = document.querySelector('.container__button'); // кнопка для получения информации
const url = "https://reqres.in/api/users"; // апи

const getInfo = () => {
 axios(url).then(console.log).catch(console.log);
}

getBtn.addEventListener('click', getInfo);