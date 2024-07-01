const menu = () => {
    
    const menu = document.querySelector('#content');
    const menuTitle = document.createElement('h1');
    menu.innerHTML = "";
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);
}

export default menu;