const menu = () => {
    
    const menu = document.querySelector('#content');
    menu.innerHTML = "";

    // Hero Section

    const heroSection = document.createElement('div');
    heroSection.setAttribute('class', 'hero-section');
    const heroHead = document.createElement('h1');
    const heroPara = document.createElement('p');
    heroHead.textContent = "Our Menu";
    
    heroSection.appendChild(heroHead);
    menu.appendChild(heroSection);

    // Menu Item 1

    const menuSection = document.createElement('section');
    const menuItem = document.createElement('div');
    const heading1 = document.createElement('h3');
    const para1 = document.createElement('p');

    heading1.textContent = "Bruschetta";
    para1.textContent = "Grilled bread topped with garlic, tomatoes, olive oil, and basil."
    
    menuSection.appendChild(menuItem);
    menuItem.appendChild(heading1);
    menuItem.appendChild(para1);
    menu.appendChild(menuSection);
   
   
    // Menu Item 2

    const menuSection2 = document.createElement('section');
    const menuItem2 = document.createElement('div');
    const heading2 = document.createElement('h3');
    const para2 = document.createElement('p');

    heading2.textContent = "Caesar Salad";
    para2.textContent = "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese."
    
    menuSection2.appendChild(menuItem2);
    menuItem2.appendChild(heading2);
    menuItem2.appendChild(para2);
    menu.appendChild(menuSection2);
    
    
    // // Menu Item 1

    // const menuSection = document.createElement('section');
    // const menuItem = document.createElement('div');
    // const heading1 = document.createElement('h3');
    // const para1 = document.createElement('p');

    // heading1.textContent = "Bruschetta";
    // para1.textContent = "Grilled bread topped with garlic, tomatoes, olive oil, and basil."
    
    // menuSection.appendChild(menuItem);
    // menuItem.appendChild(heading1);
    // menuItem.appendChild(para1);
    // menu.appendChild(menuSection);
    // // Menu Item 1

    // const menuSection = document.createElement('section');
    // const menuItem = document.createElement('div');
    // const heading1 = document.createElement('h3');
    // const para1 = document.createElement('p');

    // heading1.textContent = "Bruschetta";
    // para1.textContent = "Grilled bread topped with garlic, tomatoes, olive oil, and basil."
    
    // menuSection.appendChild(menuItem);
    // menuItem.appendChild(heading1);
    // menuItem.appendChild(para1);
    // menu.appendChild(menuSection);

}

export default menu;