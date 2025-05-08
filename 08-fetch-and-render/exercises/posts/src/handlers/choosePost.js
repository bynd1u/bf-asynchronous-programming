import { typicodeResource } from '../api-calls/typicode-resource.js';

export const choosePost = async (event) => {
    const postId = event.target.form.postId.value;

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const postPromise = typicodeResource('posts', postId);

        const post = await postPromise;

        const postElement = document.createElement('div');
        postElement.innerHTML = post;
    } catch (err) {
        console.error(err);
    }
};
