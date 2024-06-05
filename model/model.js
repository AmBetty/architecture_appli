class Task {
    constructor(description, category, completed = false) {
        this.description = description;
        this.category = category;
        this.completed = completed;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description, category) {
        const task = new Task(description, category);
        this.tasks.push(task);
        return task;
    }

    getAllTasks() {
        return this.tasks;
    }
}

const taskManager = new TaskManager();
