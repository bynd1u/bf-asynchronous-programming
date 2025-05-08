import { renderTodo } from './render-todo.js';

export const renderUser = (user = {}, todos = []) => {
    const container = document.createElement('div');

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = user.username;
    container.append(titleEl);

    const nameEl = document.createElement('p');
    nameEl.innerHTML = `name: ${user.name}`;
    container.append(nameEl);

    const emailEl = document.createElement('p');
    emailEl.innerHTML = `email: ${user.email}`;
    container.append(emailEl);

    const websiteEl = document.createElement('p');
    websiteEl.innerHTML = `website: <a href='http://${user.website}' target="_blank">${user.website}</a>`;
    container.append(websiteEl);

    const renderedTodos = todos
        .map((todo) => renderTodo(todo))
        .reduce((all, next) => {
            all.appendChild(next);
            return all;
        }, document.createElement('div'));

    container.appendChild(renderedTodos);

    return container;
};
