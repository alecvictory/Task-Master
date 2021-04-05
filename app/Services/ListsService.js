import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

class ListsService {
    addList(newList) {
        ProxyState.lists = [...ProxyState.lists, new List(newList.name, newList.color)]
        saveState()
    }

    deleteList(id) {
        let answer = confirm('are you sure?');
        if (answer == true) {
            ProxyState.lists = ProxyState.lists.filter(p => p.id != id)
        }
        saveState()
    }
}

export const listsService = new ListsService();

