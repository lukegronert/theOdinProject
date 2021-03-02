import {Project, projects} from './projects.js';

function renderProjectBar() {
    const projectBar = document.querySelector('#projectBar');
    const projectList = document.createElement('ul');
    projectList.classList.add('.projectList');

    //Make new project button add new project to the projectList
    const newProjectButton = document.querySelector('#newProjectButton');
    newProjectButton.addEventListener('click', () => {
        const newProjectInput = document.createElement('input');
        newProjectInput.placeholder = 'Project Name';
        projectList.appendChild(newProjectInput);
        const newProjectSubmitButton = document.createElement('button');
        const submitButtonText = document.createTextNode('Submit');
        newProjectSubmitButton.appendChild(submitButtonText);
        projectList.appendChild(newProjectSubmitButton);
        newProjectSubmitButton.addEventListener('click', () => {
            console.log(projects);
            projects.push(new Project(newProjectInput.value));
            projectList.removeChild(newProjectInput);
            projectList.removeChild(newProjectSubmitButton);
            createProjectListLi(projects[projects.length-1]);
        })
    })

    function createProjectListLi(project) {
        //Create li
        const projectLi = document.createElement('li');
        //Putting the project name in a span to differentiate it from the button in the same li
        //This makes it so that e.target.innerHTML in renderToDoList() in toDoList.js gives us the project name only
        const projectLiSpan = document.createElement('span');
        const projectLiSpanText = document.createTextNode(project.name);
        projectLiSpan.appendChild(projectLiSpanText);
        projectLi.appendChild(projectLiSpan);
        //Create delete button
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode('Delete');
        deleteButton.classList.add('deleteBtn')
        deleteButton.appendChild(deleteButtonText);
        projectLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            projectList.removeChild(projectLi);
        })
        projectList.appendChild(projectLi);
    }

    //Sample projects
    projects.push(new Project('Project1'));
    projects[0].addToDo('Wash Dog');
    projects.push(new Project('Project2'));
    projects.push(new Project('Project3'));

    //Create li's for each project and append them to projectList
    function renderProjectList() {
        projects.forEach((project) => {
            createProjectListLi(project);
        })
    }

    projectBar.appendChild(projectList);
    renderProjectList();
};

export {
    renderProjectBar
}