(()=> {
/*
  * Preloader
  */
const preloader = document.querySelector('.preloader');
const preloaderTop = document.querySelector('.preloader__top');
const preloaderBottom = document.querySelector('.preloader__bottom');

let timeout = setTimeout(() =>{
  preloaderTop.classList.add('popup');
  preloaderBottom.classList.add('popdown');
}, 2000);
let timeout2 = setTimeout(() =>{
  preloader.style.display = 'none';
}, 3000);

})()