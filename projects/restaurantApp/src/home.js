const renderHome = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    const title = document.createElement('h1');
    const titleWords = document.createTextNode("Luke's Restaurant");
    title.appendChild(titleWords);
    main.appendChild(title);
    const desc = document.createElement('p');
    const descWords = document.createTextNode("A dining experience like no other. Join us!");

    title.classList.add('homeTitle');
    desc.classList.add('homeP');
    desc.appendChild(descWords);
    main.appendChild(desc);
    main.classList.add('main');

    content.appendChild(main);;  
};

export {
    renderHome
}