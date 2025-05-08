import { choosePost } from '../events/choose-post.js';

export const fetchAndRenderPost = (id = '') => {
    document.getElementById(id).addEventListener('click', choosePost);
};
