export const getGithubProfile = async (username = 'HackYourFutureBelgium') => {
    const URL = `https://api.github.com/users/${username}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
