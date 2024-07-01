const reservations = () => {

    const reservations = document.querySelector('#content');
    const resTitle = document.createElement('h1');
    reservations.innerHTML = "";
    resTitle.textContent = "Reservations";
    reservations.appendChild(resTitle);
}

export default reservations;