const initHomePage = () => {
    const content = document.querySelector('#content');
    const addTitle = () => {
        const title = document.createElement('h1');
        const titleWords = document.createTextNode('My Restaurant');
        title.appendChild(titleWords);
        content.appendChild(title);
    }
    const addPicture = () => {
        const picture = document.createElement('img');
        picture.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        content.appendChild(picture);
    }
    const addDescription = () => {
        const desc = document.createElement('p');
        const descWords = document.createTextNode("My restaurant is good.");
        desc.appendChild(descWords);
        content.appendChild(desc);
    }
    return addTitle(), addPicture(), addDescription();
};

export {
    initHomePage
}