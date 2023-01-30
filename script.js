// получение первого видео в переменную
const firstVideo = document.getElementById('video-title-link');

// получение выхода на главную
const logo = document.getElementById('logo-icon')



// функция нажатия на первое видео
const firstVideoClick = () => firstVideo.click();

// функция выхода на главную
const mainPageClick = () => logo.click();



// интервал между открытием первого видео и выхода на главную
setInterval(() => {
    firstVideoClick();
}, 5000);

// интервал между открытием первого видео и выхода на главную
setInterval(() => {
    mainPageClick();
}, 10000);
