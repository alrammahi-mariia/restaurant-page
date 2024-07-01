import homepage from './homepage.js';
import menu from './menu.js';
import reservations from './reservations.js';

homepage();

const menuButton = document.querySelector('#menu');
const homeButton = document.querySelector('#home');
const reservationsButton = document.querySelector('#reservations');

menuButton.addEventListener('click', menu);
homeButton.addEventListener('click', homepage);
reservationsButton.addEventListener('click', reservations);