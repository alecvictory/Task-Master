import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";


export function saveState() {
    localStorage.setItem('checkpoint-3', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
    // localStorage.setItem('checkbox', checkbox.checked);
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('checkpoint-3'))
    if (data) {
        ProxyState.lists = data.lists.map(list => new List(list.name, list.color, list.id));
        ProxyState.tasks = data.tasks.map(task => new Task(task.name, task.listId, task.id));
    }
    // let checked = JSON.parse(localStorage.getItem('checkbox'));
    // document.getElementById('checkbox').checked = checked;
}