import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {
    addTask(newTask) {
        ProxyState.tasks.push(new Task(newTask.name, newTask.listId))
        ProxyState.tasks = ProxyState.tasks
        saveState()
    }

    deleteTask(id) {
        let answer = confirm('are you sure?');
        if (answer == true) {
            ProxyState.tasks = ProxyState.tasks.filter(p => p.id != id)
        }
        saveState()
    }

    // save() {
    //     let checkbox = document.getElementById('checkbox');
    //     saveState();
    // }
}

export const tasksService = new TasksService();

