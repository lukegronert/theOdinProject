import {Project} from './projects.js';

function renderProjectBar() {
    const projectBar = document.querySelector('#projectBar');
    const projectList = document.createElement('ul');

    let projects = [];

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
            projects.push(new Project(newProjectInput.value));
            projectList.removeChild(newProjectInput);
            projectList.removeChild(newProjectSubmitButton);
            createProjectListLi(projects[projects.length-1]);
        })
    });

    function createProjectListLi(project) {
            const projectLi = document.createElement('li');
            const projectText = document.createTextNode(project.name);
            projectLi.appendChild(projectText);
            projectList.appendChild(projectLi);
    }

    //Sample projects
    projects.push(new Project('Project1'));
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