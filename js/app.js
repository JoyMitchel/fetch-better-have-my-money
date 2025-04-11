const API_URL = 'http://localhost:3000/todos';

document.addEventListener ('DOMContentLoaded', fetchTasks);

const tasksList = document.querySelector ('#tasks-list');

function fetchTasks() {
    fetch(API_URL).then(res => {
        if (!res.ok) {
            alert (res.status)
        }
        
        return res.json(); 
    }).then ((todos) => console.log(todos)
    )
} 