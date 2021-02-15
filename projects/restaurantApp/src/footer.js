function renderFooter() {
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    content.appendChild(footer);
}

export {
    renderFooter
}