import {Project, projects} from "./projects.js";

function renderToDoList() {
    const content = document.querySelector("#content");
    const projectList = projectBar.querySelectorAll('ul');
    const toDoListUl = document.createElement('ul');

    let currentProject = projects[0];

    const newToDoButton = document.querySelector('#newToDoButton');
    //When newToDoButton is clicked:
    newToDoButton.addEventListener('click', () => {
        //If there is no input already displayed
        if(!content.querySelector('input')) {
            //Create an input field and submit button
            const newToDoInput = document.createElement('input');
            newToDoInput.placeholder = 'Enter information';
            toDoListUl.appendChild(newToDoInput);
            const newToDoSubmitButton = document.createElement('button');
            const submitButtonText = document.createTextNode('Submit');
            newToDoSubmitButton.appendChild(submitButtonText);
            toDoListUl.appendChild(newToDoSubmitButton);
            newToDoSubmitButton.classList.add('toDoSubmitBtn');
            //When submit button is clicked:
            newToDoSubmitButton.addEventListener('click', () => {
                //Add to do to project toDoList
                currentProject.getToDos().push(newToDoInput.value);
                //Remove input and submit button
                toDoListUl.removeChild(newToDoInput);
                toDoListUl.removeChild(newToDoSubmitButton);
                //Create li for new todo
                createToDoLi(currentProject.getToDos()[currentProject.getToDos().length -1]);
            })
        } else {
            //If an input is already displayed, remove it and the submit button
            toDoListUl.removeChild(content.querySelector('input'));
            toDoListUl.removeChild(content.querySelector('.toDoSubmitBtn'));
        }
    })
    //Bring up to do list of project when clicked
    projectList.forEach((projectLi) => {
        projectLi.addEventListener('click', (e) => {
            projects.forEach((project) => {
                if(e.target.innerHTML.includes(project.name)) {
                    toDoListUl.innerHTML = '';
                    currentProject = project;
                    project.getToDos().forEach((todo) => {
                        createToDoLi(todo);
                    })
                }
            })
        })
    })

    function createToDoLi(todo) {
        //Create li
        const newLi = document.createElement('li');
        const newLiText = document.createTextNode(todo);
        newLi.appendChild(newLiText);

        //Create delete button
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode('Delete');
        deleteButton.classList.add('deleteBtn')
        deleteButton.appendChild(deleteButtonText);
        newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            toDoListUl.removeChild(newLi);
        })
        toDoListUl.appendChild(newLi);
    }

    currentProject.getToDos().forEach((todo) => {
        createToDoLi(todo);
    })
    content.appendChild(toDoListUl);
}

export {
    renderToDoList
}