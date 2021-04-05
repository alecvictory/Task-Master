import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";

//Public
export default class TasksController {

    addTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let newTask = {
            name: form['name'].value,
            listId: listId
        }
        tasksService.addTask(newTask)
        // @ts-ignore
        form.reset()
    }

    deleteTask(id) {
        tasksService.deleteTask(id)
    }

    save() {
        tasksService.save()
    }

}
