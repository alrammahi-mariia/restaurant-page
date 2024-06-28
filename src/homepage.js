const homepage = () => {
    const content = document.querySelector('#content');

    // Hero section 
    const heroSection = document.createElement('div');
    heroSection.setAttribute('class', 'hero-section');
    const textBox = document.createElement('div');
    const heroHead = document.createElement('h1');
    const heroPara = document.createElement('p');
    const image = document.createElement('img');
    image.setAttribute('href', 'hero-img.jpeg');
    heroHead.textContent = "Exquisite dining since 1989";
    heroPara.textContent = "Experience our seasonal menu in beautitul country surroundings. Eat the freshest produce from the comfort of our farmhouse."
   
    heroSection.appendChild(textBox);
    textBox.appendChild(heroHead);
    textBox.appendChild(heroPara);
    heroSection.appendChild(image);

    // Section 1

    const firstSection = document.createElement('section');
    const text1 = document.createElement('div');
    firstSection.appendChild(text1);
    const heading1 = document.createElement('h2');
    const para1 = document.createElement('p');
    const image1 = document.createElement('img');
    image1.setAttribute('href', 'img-1.jpg');

    heading1.textContent = "Enjoyable place for all the family";
    para1.textContent = "Our relaxed surroundings make dining with us a grea experience for everyone. We can even arrange a tou of the tarm betore your meal"
    
    firstSection.appendChild(text1);
    text1.appendChild(heading1);
    text1.appendChild(para1);
    firstSection.appendChild(image1);

    content.appendChild(heroSection);
    content.appendChild(firstSection);


    // Section 2

    const secondSection = document.createElement('section');
    const text2 = document.createElement('div');
    secondSection.appendChild(text2);
    const heading2 = document.createElement('h2');
    const para2 = document.createElement('p');
    const image2 = document.createElement('img');
    image1.setAttribute('href', 'img-2.jpg');

    heading2.textContent = "The most locally sourced food";
    para2.textContent = "All our incredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food."
    
    secondSection.appendChild(text2);
    text2.appendChild(heading2);
    text2.appendChild(para2);
    secondSection.appendChild(image2);

    content.appendChild(heroSection);
    content.appendChild(firstSection);
    content.appendChild(secondSection);

}

export default homepage;