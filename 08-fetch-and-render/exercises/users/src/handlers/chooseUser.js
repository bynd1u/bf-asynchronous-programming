import typicodeResource from '../api-calls/typicode-resource/js';
import renderUser from '../components/render-user.js';

export const chooseUser = async (event) => {
    const userId = event.target.form.userId.value;

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const userPromsie = typicodeResource('users', userId);
        const userTodos = typicodeResource('users', userId, 'todos');

        const [user, todos] = await Promise.all([userPromsie, userTodos]);

        const renderedUser = renderUser(user, todos);

        root.append(renderedUser);
    } catch (err) {
        console.error(err);
    }
};
