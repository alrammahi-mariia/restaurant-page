import homepage from './homepage.js';
import menu from './menu.js';
import reservations from './reservations.js';
import pageLoad from './Pageload.js';
import './styles.css';

pageLoad();


const menuButton = document.querySelector('#menu');
const homeButton = document.querySelector('#home');
const reservationsButton = document.querySelector('#reservations');

function clearContent(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
}

menuButton.addEventListener('click', () => {
    clearContent(),
    menu()
});

homeButton.addEventListener('click',  () => {
    clearContent(),
    homepage()
});

reservationsButton.addEventListener('click',  () => {
    clearContent(),
    reservations()
});