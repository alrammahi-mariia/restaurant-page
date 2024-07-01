const reservations = () => {

    const content = document.querySelector('#content');
    const resTitle = document.createElement('h1');
    reservations.innerHTML = "";
    resTitle.textContent = "Reservations";
    content.appendChild(resTitle);
}

export default reservations;