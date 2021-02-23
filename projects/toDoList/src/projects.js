const manageProjects = (() => {
    //Project constructor
    function Project(name) {
        this.name = name;
        this.toDoList =  [];
    }
    //Array of all projects
    let projects = [];

    return {
        projects,
        //Create new project and push it to projects array
        createProject(name) {
            const newProject = new Project(name);
            projects.push(newProject);
            return newProject;
        },
        //Add a to do to toDoList array inside project object
        addToDo(projectName, title) {
            const newToDo = {title};
            projectName.toDoList.push(newToDo);
        },
        //Returns array of todos in project's toDoList
        getToDos(projectName) {
            return projectName.toDoList;
        }
    }
})();

export {
    manageProjects
}