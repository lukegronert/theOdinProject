const renderMenu = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add('main');
    const menuTitle = document.createElement('h1');
    const menuTitleText = document.createTextNode('Menu');
    menuTitle.appendChild(menuTitleText);
    main.appendChild(menuTitle);
    content.appendChild(main);
}

export {
    renderMenu
}