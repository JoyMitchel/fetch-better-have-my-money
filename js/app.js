const API_URL = 'http://localhost:3000/todos';

document.addEventListener ('DOMContentLoaded', fetchTasks);

const tasksList = document.querySelector ('#tasks-list');

function fetchTasks() {
    fetch(API_URL).then(res => {
        if (!res.ok) {
            alert (res.status)
        }
        
        return res.json(); 
    }).then ((todos) => {
      renderTodos(todos)  
    }
    )
} 

function renderTodos(todos) {
    
    todos.forEach (todo => {
        const todoElement = document.createElement ('div');

        todoElement.className = 'task';

        const checkbox = document.createElement ('input');

        const todoText = document.createElement ('span');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        
    })
}