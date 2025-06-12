import "./styles.css"

const bigList = (() => {
    const projList = []

    const addProject = (project) => {
        projList.push(project)
    }

    const hasProject = (proj) => {
        return (proj in projList)
    }

    return {projList, addProject, hasProject}
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

    constructor(title, description="") {
        this.title = title
        this.description = description
        this.#todoArr = {}
    }

    addTodo(todo) {
        this.#todoArr[todo.name]=todo
    }

    getTodos() {
        const tmpList = []
        for (const value of Object.values(this.#todoArr)) {
            tmpList.push(value)
        }
        return tmpList
    }
}


const standardProj = new Project("Standard")
bigList.addProject(standardProj)

function makeTodo(title, dueTime, priority, description, parent=standardProj) {
    if (!bigList.hasProject(parent)) {
        parent = new Project(parent)
        bigList.addProject(parent)
    }
    const todo = new Todo(title, dueTime, priority, description, parent)
    parent.addTodo(todo)
    return parent.getTodos()
}

console.log(makeTodo("groceries", "now", "high", "come on", "chores"))
console.log(bigList.projList)