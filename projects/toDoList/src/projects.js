class Project {
    constructor(name) {
        this.name = name;
        this.toDoList =  [];
    }
    //Create new project and push it to projects array
    createProject(name) {
        const newProject = new Project(name);
        projects.push(newProject);
        return newProject;
    }
    //Add a to do to toDoList array inside project object
    addToDo(title) {
        this.toDoList.push(title)
    }
    //Returns array of todos in project's toDoList
    getToDos() {
        return this.toDoList;
    }

    getProjectName() {
        return this.name;
    }
}

export {
    Project
}