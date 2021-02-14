function renderNavbar () {
    const content = document.querySelector("#content");
    const navbarItems = ["home", "menu", "contact"];
    const ul = document.createElement('ul');

    navbarItems.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    })

    content.appendChild(ul);
}

export {
    renderNavbar
}