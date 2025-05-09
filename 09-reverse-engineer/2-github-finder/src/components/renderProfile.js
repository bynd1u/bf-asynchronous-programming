export const renderProfile = (user = {}) => {
    const container = document.createElement('div');
    container.classList = 'card card-body m-3';

    const rowEl = document.createElement('div');
    rowEl.classList = 'row';
    const colEl = document.createElement('div');
    colEl.classList = 'col-md-3';

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', user.avatar_url);
    imgEl.classList = 'img-fluid mb-2';
    imgEl.setAttribute('alt', user.login);

    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', user.html_url);
    linkEl.setAttribute('target', '_blank');
    linkEl.classList = 'btn btn-primary mb-4 btn-block';
    linkEl.innerHTML = 'View Profile';

    colEl.append(imgEl);
    colEl.append(linkEl);
    container.append(colEl);

    const colEl2 = document.createElement('div');
    colEl2.classList = 'col-md-9';
    const titleEl = document.createElement('h3');
    titleEl.innerHTML = user.login;
    colEl2.append(titleEl);

    const descriptionEl = document.createElement('small');
    descriptionEl.innerHTML = user.bio;
    colEl2.append(descriptionEl);

    const brEl1 = document.createElement('br');
    const brEl2 = document.createElement('br');
    colEl2.append(brEl1);
    colEl2.append(brEl2);

    //add 4 spans
    const spanEl1 = document.createElement('span');
    spanEl1.classList = 'badge bg-primary';
    spanEl1.innerHTML = `Public Repos: ${user.public_repos}`;
    colEl2.append(spanEl1);
    const spanEl2 = document.createElement('span');
    spanEl2.classList = 'badge bg-secondary';
    spanEl2.innerHTML = `Public Gists: ${user.public_gists}`;
    colEl2.append(spanEl2);
    const spanEl3 = document.createElement('span');
    spanEl3.classList = 'badge bg-success';
    spanEl3.innerHTML = `Followers: ${user.followers}`;
    colEl2.append(spanEl3);
    const spanEl4 = document.createElement('span');
    spanEl4.classList = 'badge bg-info';
    spanEl4.innerHTML = `Following: ${user.following}`;
    colEl2.append(spanEl4);
    const brEl3 = document.createElement('br');
    const brEl4 = document.createElement('br');
    colEl2.append(brEl3);
    colEl2.append(brEl4);

    // add unordered list
    const ulEl = document.createElement('ul');
    ulEl.classList = 'list-group';
    // list items with ::marker
    const liEl1 = document.createElement('li');
    liEl1.classList = 'list-group-item';
    liEl1.innerHTML = `<strong>Company:</strong> ${user.company}`;
    const liEl2 = document.createElement('li');
    liEl2.classList = 'list-group-item';
    liEl2.innerHTML = `<strong>Website/Blog:</strong> ${user.blog}`;
    const liEl3 = document.createElement('li');
    liEl3.classList = 'list-group-item';
    liEl3.innerHTML = `<strong>Location:</strong> ${user.location}`;
    const liEl4 = document.createElement('li');
    liEl4.classList = 'list-group-item';
    liEl4.innerHTML = `<strong>Member Since:</strong> ${new Date(
        user.created_at,
    ).toLocaleDateString()}`;

    //append list items to unordered list
    ulEl.append(liEl1);
    ulEl.append(liEl2);
    ulEl.append(liEl3);
    ulEl.append(liEl4);
    colEl2.append(ulEl);

    container.append(colEl2);

    return container;
};
