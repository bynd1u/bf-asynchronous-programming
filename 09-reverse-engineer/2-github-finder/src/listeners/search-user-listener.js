import { fetchAndRenderUser } from '../handlers/fetch-and-render-user.js';

export const searchUserListener = (btnId = '', inputFieldId = '') => {
    console.log('clicked');
    const inputField = document.getElementById(inputFieldId);

    document
        .getElementById(btnId)
        .addEventListener('click', () => fetchAndRenderUser(inputField.value));
};
