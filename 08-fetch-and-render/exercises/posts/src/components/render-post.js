import { renderComment } from './render-comment.js';

export const renderPost = (post = {}, comments = {}) => {
    const container = document.createElement('div');
    container.id = `post-${post.id}`;

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = post.title;
    container.append(titleEl);

    const idEl = document.createElement('code');
    idEl.innerHTML = `posted by user: ${post.id}`;
    container.append(idEl);

    const mainEl = document.createElement('p');
    mainEl.innerHTML = post.body;
    container.append(mainEl);

    const renderedComments = comments
        .map((comment) => renderComment(comment))
        .reduce((all, next) => {
            all.append(next);
            return all;
        }, document.createElement('div'));

    container.append(renderedComments);

    return container;
};
