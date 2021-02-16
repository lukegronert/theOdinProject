const renderContact = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    const title = document.createElement('h1');
    const titleWords = document.createTextNode("Contact Us");
    title.appendChild(titleWords);
    main.appendChild(title);
    const formSubject = document.createElement('textarea');
    formSubject.setAttribute("placeholder", "Your Email")
    const formTextArea = document.createElement('textarea');
    formTextArea.setAttribute('placeholder', 'Your Message');
    const formButton = document.createElement('button');
    const formButtonText = document.createTextNode('SUBMIT');
    formButton.appendChild(formButtonText);

    formButton.classList.add('formButton');
    title.classList.add('contactTitle');
    formSubject.classList.add('formSubject');
    formTextArea.classList.add('formTextArea');
    main.appendChild(formSubject);
    main.appendChild(formTextArea);
    main.appendChild(formButton);
    main.classList.add('contactMain');

    content.appendChild(main);;  
};

export {
    renderContact
}