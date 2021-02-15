const renderMenu = () => {
    const content = document.querySelector('#content');
    const menuMain = document.createElement('div');
    menuMain.classList.add('menuMain');
    // const menuTitle = document.createElement('h1');
    // const menuTitleText = document.createTextNode('Menu');
    // menuTitle.appendChild(menuTitleText);
    // main.appendChild(menuTitle);
    const menuItems = [{name: 'Item1', desc: 'Description1', price: '$5.00'},{name: 'Item2', desc: 'Description2', price: '$5.00'},{name: 'Item3', desc: 'Description3', price: '$5.00'},
            {name: 'Item4', desc: 'Description4', price: '$5.00'},{name: 'Item5', desc: 'Description5', price: '$5.00'},{name: 'Item5', desc: 'Description5', price: '$5.00'}];
    
    menuItems.forEach((item) => {
        const box = document.createElement('div');
        box.classList.add('foodItem');
        const itemName = document.createElement('h2');
        const itemNameText = document.createTextNode(item.name);
        itemName.appendChild(itemNameText);
        const itemDesc = document.createElement('p');
        const itemDescText = document.createTextNode(item.desc);
        itemDesc.appendChild(itemDescText);
        const itemPrice = document.createElement('p');
        const itemPriceText = document.createTextNode(item.price);
        itemPrice.appendChild(itemPriceText);
        itemPrice.classList.add('price');

        box.appendChild(itemName);
        box.appendChild(itemDesc);
        box.appendChild(itemPrice);
        menuMain.appendChild(box);
    })

    content.appendChild(menuMain);
}

export {
    renderMenu
}