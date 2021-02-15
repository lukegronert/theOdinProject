function renderNavbar () {
    const content = document.querySelector("#content");
    const div = document.createElement('div');
    const navbarItems = ["home", "menu", "contact"];
    const ul = document.createElement('ul');

    navbarItems.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        li.classList.add(item + 'Button')
        ul.appendChild(li);
    });

    div.appendChild(ul);
    div.classList.add('navbarDiv');

    content.appendChild(div);
}

export {
    renderNavbar
}