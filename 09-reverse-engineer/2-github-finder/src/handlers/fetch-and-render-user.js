import { getGithubProfile } from '../api-calls/getGithubProfile.js';
import { renderProfile } from '../components/renderProfile.js';

export const fetchAndRenderUser = async (username) => {
    console.log(username);
    const root = document.getElementById('profile');
    const errorText = document.getElementById('error');
    errorText.classList = '';

    errorText.innerHTML = '';
    root.innerHTML = '';

    try {
        const data = await getGithubProfile(username);
        console.log(data);

        const renderedProfile = renderProfile(data);
        root.append(renderedProfile);
    } catch (err) {
        console.error(err);
        if (err.message.includes('404')) {
            errorText.classList = 'alert alert-danger';
            errorText.innerHTML = 'User not found';
        }
    }
};
