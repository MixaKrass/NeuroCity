const divParent = document.querySelector('.div1');   // Родительский див 
const divChild = document.querySelector('.div2'); // детский див

const widthPar = divParent.offsetWidth; // узнаём ширину родителя

divChild.setAttribute('style', `margin: ${widthPar/4}px 0 0 ${widthPar/4}px`) // устанавливаем нужное значение