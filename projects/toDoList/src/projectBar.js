import {manageProjects} from "./projects.js";

const renderProjectBar = (() => {
    const projectBar = document.querySelector('#projectBar');
    const projectList = document.createElement('ul');
    projectList.classList.add('projectList');

    //Sample project
    const project1 = manageProjects.createProject('project1');
    manageProjects.addToDo(project1, 'Task1');

    return {
        renderProjectList() {
            //Clears projectList
            projectList.innerHTML = "";
            //Fills projectList with lis for each project names
            manageProjects.projects.forEach((project) => {
                const li = document.createElement('li');
                const liText = document.createTextNode(project.name);
                li.appendChild(liText);
                projectList.appendChild(li);
            })
            projectBar.appendChild(projectList);
        },
        renderNewProjectButton() {
            //create a button for a new project and puts it in projectBar
            const newProjectButton = document.createElement('button');
            newProjectButton.classList.add('newProjectButton');
            const buttonText = document.createTextNode('NEW');
            newProjectButton.appendChild(buttonText);
            projectBar.appendChild(newProjectButton);
            //when newProjectButton is clicked
            newProjectButton.addEventListener('click', () => {
                //Create a form to enter a new project name
                const projectFormli = document.createElement('li');
                const projectForm = document.createElement('input');
                projectForm.placeholder = 'Project Name';
                projectFormli.appendChild(projectForm);
                projectList.appendChild(projectFormli);
                //Create submit button
                const submitButton = document.createElement('input');
                submitButton.setAttribute('type', 'submit');
                projectList.appendChild(submitButton);
                //When submit button is clicked
                submitButton.addEventListener('click', () => {
                    //Create a project with the name of the text in projectForm
                    manageProjects.createProject(projectForm.value);
                    console.log(manageProjects.projects);
                    //Clear projectList
                    if(projectBar.hasChildNodes()) {
                        projectBar.removeChild(projectList);
                    }
                    //Repopulate project list with all project names
                    this.renderProjectList()
                })
            })
        }
    }
})();

export {
    renderProjectBar
}