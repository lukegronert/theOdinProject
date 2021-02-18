import {manageProjects} from "./projects.js";

function renderProjectBar() {
    const projectBar = document.querySelector('#projectBar');

    const ul = document.createElement('ul');

    const project1 = manageProjects.createProject('project1');
    const project2 = manageProjects.createProject('project2');
    manageProjects.addToDo(project1, 'Wash Dog', 'Clean the dog', 'tomorrow', 'high');

    const projectName = document.createTextNode(project1.name);
    manageProjects.projects.forEach((project) => {
        const li = document.createElement('li');
        const liText = document.createTextNode(project.name);
        li.appendChild(liText);
        ul.appendChild(li);
    })
    projectBar.appendChild(ul);
}

export {
    renderProjectBar
}