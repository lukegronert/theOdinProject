class ToDo {
    constructor(title) {
        this.title = title;
    }

    createToDo(title) {
        const newToDo = new ToDo(title);
        return newToDo;
    }

    getToDoTitle() {
        return this.title;
    }
    

}

export {
    ToDo
}