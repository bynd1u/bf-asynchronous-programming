import { getWikipediaArticles } from '../api-calls/getWikipediaArticles.js';
import { renderArticle } from '../components/renderArticle.js';

export const chooseSearchTerm = async (event) => {
    //get value from input field

    const output = document.getElementById('output');

    const searchTerm = document.querySelector('.input-field').value;

    const errorText = document.getElementById('#error');
    errorText.innerHTML = '';

    output.innerHTML = '';

    try {
        if (searchTerm) {
            const data = await getWikipediaArticles(searchTerm);
            console.log(data);
            const articles = data.query.search;

            articles
                .map((article) => renderArticle(article))
                .reduce((acc, curr) => {
                    acc.appendChild(curr);
                    return acc;
                }, output);
        } else {
            console.log('input field');
            errorText.innerHTML = 'Input field is empty!';
        }
    } catch (err) {
        console.error(err);
    }
};
