export const renderComment = (comment = {}) => {
    const container = document.createElement('div');

    container.id = `comment-${comment.id}`;

    const titleEl = document.createElement('h2');
    titleEl.innerHTML = comment.name;
    container.append(titleEl);

    const userEl = document.createElement('code');
    userEl.innerHTML = `comment by: ${comment.email}`;
    container.append(userEl);

    const mainEl = document.createElement('p');
    mainEl.innerHTML = comment.body;
    container.append(mainEl);

    container.classList.add('comment');

    return container;
};
