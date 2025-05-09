import { SEARCH_PATTERN } from '../config.js';

export const getWikipediaArticles = async (searchTerm = 'JavaScript') => {
    const URL = `${SEARCH_PATTERN}${searchTerm}`;

    console.log('URL: ' + URL);

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
