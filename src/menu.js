const menu = () => {
    const menu = document.querySelector('body');
    const dish = document.createElement('h1');
    dish.textContent = "Lasagne";
    menu.appendChild(dish);
}

export default menu;