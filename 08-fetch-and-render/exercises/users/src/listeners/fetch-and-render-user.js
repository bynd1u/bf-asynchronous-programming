import { chooseUser } from '../handlers/chooseUser.js';

export const fetchAndRenderUser = (id = '') => {
    document.getElementById(id).addEventListener('click', chooseUser);
};
