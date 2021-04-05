import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js";

//Private
function _draw() {
    let lists = ProxyState.lists;
    let template = ''
    lists.forEach(v => template += v.Template)
    document.getElementById("lists").innerHTML = template
}

//Public
export default class ListsController {
    constructor() {
        ProxyState.on("lists", _draw);
        ProxyState.on("tasks", _draw);
        loadState()
        _draw()
    }

    addList() {
        window.event.preventDefault()
        let form = window.event.target
        let newList = {
            name: form['list'].value,
            color: form['color'].value
        }
        listsService.addList(newList)
        // @ts-ignore
        form.reset()
    }
    deleteList(id) {
        listsService.deleteList(id)
    }
}
