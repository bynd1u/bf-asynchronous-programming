import { chooseSearchTerm } from '../handlers/choose-search-term.js';

export const fetchAndRenderUser = (id = '') => {
    document.getElementById(id).addEventListener('click', chooseSearchTerm);
};
