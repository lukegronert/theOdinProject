import {Project, projects} from "./projects.js";

function renderToDoList() {
    const content = document.querySelector("#content");
    const projectList = projectBar.querySelectorAll('ul');
    const toDoListUl = document.createElement('ul');

    let currentProject = projects[0];

    const newToDoButton = document.querySelector('#newToDoButton');
    newToDoButton.addEventListener('click', () => {
        const newToDoInput = document.createElement('input');
        newToDoInput.placeholder = 'Enter information';
        toDoListUl.appendChild(newToDoInput);
        const newToDoSubmitButton = document.createElement('button');
        const submitButtonText = document.createTextNode('Submit');
        newToDoSubmitButton.appendChild(submitButtonText);
        toDoListUl.appendChild(newToDoSubmitButton);
        newToDoSubmitButton.addEventListener('click', () => {
            currentProject.getToDos().push(newToDoInput.value);
            toDoListUl.removeChild(newToDoInput);
            toDoListUl.removeChild(newToDoSubmitButton);
            createToDoLi(currentProject.getToDos()[currentProject.getToDos().length -1]);
        })
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