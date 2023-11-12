let todoList = [];

export const getTasks = () => {
    if (todoList.length) {
        return todoList;
    }
    return "No tasks has been added";
}

export const addTask = (data) => {
    const newTodo = JSON.parse(data);
    todoList.push(newTodo);
}

export const deleteTask = (todoId) => {
    const index = todoList.findIndex(todo => todo.id === parseInt(todoId));
    if (index !== -1) {
        todoList.splice(index, 1);
    }
}

export const updateTask = (data, todoId) => {
    const newTodo = JSON.parse(data);
    const index = todoList.findIndex(todo => todo.id === parseInt(todoId));
    if (index !== -1) {
        todoList.splice(index, 1, newTodo);
    }
}
