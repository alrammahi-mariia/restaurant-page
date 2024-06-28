import homepage from './homepage.js';
import menu from './menu.js';

homepage();

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', menu);