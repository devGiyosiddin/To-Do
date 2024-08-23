window.addEventListener('DOMContentLoaded', () =>{
    const todoList = document.querySelector('.todo-list');
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    
    function deleteItem() {
        const deleteItem = document.querySelectorAll('.delete-icon');
        deleteItem.forEach((item) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
            })
        })
    }

    todoButton.addEventListener('click', () => {
        if (todoInput.value === '') {
            console.log('Enter a task or write something you need to do )');
            return;
        }
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoList.appendChild(todoItem);
        todoItem.innerHTML = `${todoInput.value} <span class="delete-icon">&#x2624;</span>`;
        todoInput.value = '';
        deleteItem();
    });
    
})