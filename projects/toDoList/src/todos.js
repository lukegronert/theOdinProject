import {manageProjects} from './projects.js';

function renderToDos() {
    const content = document.querySelector('#content');
    const projectList = document.querySelector('.projectList');
    const projects = projectList.querySelectorAll("li");

    
    projects.forEach((project) => {
        project.addEventListener('click', (e) => {
            let name = e.target.innerHTML;
            manageProjects.projects.forEach((project) => {
                if(project.name == name) {
                    showToDoList(manageProjects.getToDos(project));
                }
            })
        });
    })

    const showToDoList = (toDoList) => {
        if(content.hasChildNodes()) {
            content.removeChild(content.childNodes[0]);
        }
        const ul = document.createElement('ul');
        toDoList.forEach((todo) => {
            const toDoItem = document.createElement('li');
            const itemInfo = [todo.title, todo.description, todo.dueDate, todo.priority];
            itemInfo.forEach((item) => {
                toDoItem.appendChild(document.createTextNode(item));
                toDoItem.appendChild(document.createElement('br'));
            })
            // const itemTitle = document.createTextNode(todo.title+todo.description+todo.dueDate+todo.priority);
            // const itemDesc = document.createTextNode(todo.description);
            // const itemDueDate = document.createTextNode(todo.dueDate);
            // const itemPriority = document.createTextNode(todo.priority);
            // toDoItem.appendChild(itemTitle);
            // toDoItem.appendChild(itemDesc);
            // toDoItem.appendChild(itemDueDate);
            // toDoItem.appendChild(itemPriority);
            ul.appendChild(toDoItem);
        })
        content.appendChild(ul);
    }
}

export {
    renderToDos
}