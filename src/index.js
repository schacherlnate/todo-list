import "./styles.css"

const bigList = (() => {
    const basicProj = new Project("All tasks", "Default container for tasks")
    const projList = [basicProj]

    const addProject = (project) => {
        projList.push(project)
    }

    return {projList, addProject}
})();

class Todo {
    constructor(title, dueTime, priority, description, parent) {
        this.title = title
        this.dueTime = dueTime
        this.priority = priority
        this.description = description
        this.parent = parent
    }
}

class Project {
    #todoArr

    constructor(title, description) {
        this.title = title
        this.description = description
        this.#todoArr = []
    }

    addTodo(todo) {
        this.#todoArr.push(todo)
    }
}

function makeTodo(title, dueTime, priority, description, parent=bigList.projList[0]) {
    const todo = new Todo(title, dueTime, priority, description, parent=bigList.projList[0])
    parent.addTodo(todo)
}

makeTodo("groceries", "now", "high", "getter done")