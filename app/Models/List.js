import { ProxyState } from '../AppState.js'
import { generateId } from '../Utils/GenerateId.js'

export default class List {
    constructor(name, color, id = generateId()) {
        this.name = name
        this.color = color
        this.id = id
    }

    get Template() {
        return `
        <div class= col-md-4>
            <div class="list-card" style="">
                <div class="card-header bg-${this.color}">
                    <h2>${this.name}</h2>
                    <button class="btn-danger btn" onclick="app.listsController.deleteList('${this.id}')">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
                <ul class="list-group list-group-flush">
                <h5>${this.Tasks}</h5>
                </ul>
            </div>
             <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
                 <input type="text" name="name" id="name" class="form-control" placeholder="Task"
                     aria-describedby="" minlength="3" maxlength="50" required>
                 <button type="submit" class="btn btn-success" title='add task'><i
                         class="fas fa-plus"></i></button>
             </form>
        </div>
    </main>
        `
    }

    get Tasks() {
        let tasks = ProxyState.tasks.filter(i => i.listId == this.id)
        let template = ''
        tasks.forEach(i => template += i.Template)
        return template
    }
}