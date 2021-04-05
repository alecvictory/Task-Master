import { ProxyState } from '../AppState.js'
import { generateId } from '../Utils/GenerateId.js'

export default class Task {
    constructor(name, listId, id = generateId(), complete = false, checked = '') {
        this.name = name
        this.listId = listId
        this.id = id
        this.complete = complete
        this.checked = checked
    }

    get Template() {
        return `<li>
        <input type="checkbox'>
        ${this.name}
        </input>
        </button>
        <button  onclick="app.tasksController.deleteTask('${this.id}')">
            <i class="fa fa-trash ml-2"></i>
        </button>
    </li>`
    }
}