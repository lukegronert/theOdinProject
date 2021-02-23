import {manageProjects} from './projects.js';

function renderToDos() {
    //To Do List Content
    const content = document.querySelector('#content');
    //Project List
    const projectList = document.querySelector('.projectList');
    //All lis in project list
    const projects = projectList.querySelectorAll("li");
    //List of to dos
    const taskList = document.createElement('ul');
    
    projects.forEach((project) => {
        //for each item in project list
        project.addEventListener('click', (e) => {
            //text of item clicked
            const name = e.target.innerHTML;
            //if project name is the same as text of item clicked
            manageProjects.projects.forEach((project) => {
                if(project.name == name) {
                    //console.log to check if if statement is returning true
                    console.log(name);
                    //populate content div with toDoList of project
                    showToDoList(manageProjects.getToDos(project));
                    //create newToDoButton
                    const newToDoButton = document.createElement('button');
                    newToDoButton.classList.add('newToDoButton');
                    const newToDoButtonText = document.createTextNode('NEW');
                    newToDoButton.appendChild(newToDoButtonText);
                    //Put button in content div
                    content.appendChild(newToDoButton);
                    //When newToDoButton is clicked
                    newToDoButton.addEventListener('click', () => {
                        //Create newToDo input
                        const newToDoli = document.createElement('li');
                        const newToDoForm = document.createElement('input');
                        newToDoForm.placeholder = 'To Do Info';
                        newToDoli.appendChild(newToDoForm);
                        taskList.appendChild(newToDoli);
                        //Create submit button
                        const submitButton = document.createElement('input');
                        submitButton.setAttribute('type', 'submit');
                        //Put submit button under input
                        taskList.appendChild(submitButton);
                        //When submit button is clicked
                        submitButton.addEventListener('click', () => {
                            //Add the value in the input to the project's toDoList
                            manageProjects.addToDo(project.name, newToDoForm.value);
                        });
                    })
                }
            })
            content.appendChild(taskList);
        })
    })
    //Takes projects toDoList
    const showToDoList = (toDoList) => {
        //Clears content of any prior toDoLists
        if(content.hasChildNodes()) {
            content.removeChild(content.childNodes[0]);
        }
        //For each todo in the toDoList
        toDoList.forEach((todo) => {
            //Create li
            const toDoItem = document.createElement('li');
            //Put todo title as text
            const itemInfo = [todo.title];
            itemInfo.forEach((item) => {
                //Put text in todo li
                toDoItem.appendChild(document.createTextNode(item));
            })
            //Put todo li on taskList
            taskList.appendChild(toDoItem);
        })
    }
}

export {
    renderToDos
}