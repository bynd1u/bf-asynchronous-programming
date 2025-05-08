export const renderTodo = (todo) => {
    const container = document.createElement('div');
    container.id = `todo-${todo.id}`;
    container.classList.add('todo');

    const boxEl = document.createElement('input');
    boxEl.setAttribute('type', 'checkbox');
    boxEl.checked = todo.completed;
    container.append(boxEl);

    const titleEl = document.createElement('code');
    titleEl.innerHTML = todo.title;
    container.append(titleEl);

    return container;
};
