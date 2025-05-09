export const renderArticle = (article) => {
    console.log(article);
    const container = document.createElement('div');
    container.classList.add('row');

    const articleURI = encodeURI(
        `https://en.wikipedia.org/wiki/${article.title}`,
    );

    const linkEl = document.createElement('a');

    linkEl.setAttribute('href', articleURI);

    const titleEl = document.createElement('h3');
    linkEl.innerHTML = article.title;
    titleEl.append(linkEl);
    container.append(titleEl);

    const descriptionEl = document.createElement('p');
    descriptionEl.innerHTML = article.snippet;
    container.append(descriptionEl);

    const buttonLink = document.createElement('a');
    buttonLink.setAttribute('href', articleURI);
    const button = document.createElement('button');
    button.innerHTML = 'View Full Article';
    buttonLink.append(button);
    container.append(buttonLink);

    return container;
};
