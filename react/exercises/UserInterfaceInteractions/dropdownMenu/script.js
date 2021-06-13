const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    $('#menu').animate({width: 'toggle', display: 'block'}, 300)
})