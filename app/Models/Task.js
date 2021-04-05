import { ProxyState } from '../AppState.js'
import { generateId } from '../Utils/GenerateId.js'

export default class Task {
    constructor(name, listId, id = generateId()) {
        this.name = name
        this.listId = listId
        this.id = id
    }

    get Template() {
        return `<li>
        <input type="checkbox">
        ${this.name}
        </input>
        <button  onclick="app.tasksController.deleteTask('${this.id}')">
            <i class="fa fa-trash ml-2"></i>
        </button>
    </li>`
    }
}