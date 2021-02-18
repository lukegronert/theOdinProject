const manageProjects = (() => {
    function Project(name) {
        this.name = name;
        this.toDoList =  [];
    }

    let projects = [];

    return {
        projects,
        createProject(name) {
            const newProject = new Project(name);
            projects.push(newProject);
            return newProject;
        },
        addToDo(projectName, title, description, dueDate, priority) {
            const newToDo = {title, description, dueDate, priority};
            projectName.toDoList.push(newToDo);
        }
    }
})();

export {
    manageProjects
}