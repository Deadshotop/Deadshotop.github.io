document.addEventListener('DOMContentLoaded', function () {
    const githubUsername = 'Deadshotop';
    const githubProjectsList = document.getElementById('github-projects');

    function getGitHubProjects() {
        const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(projects => {
                githubProjectsList.innerHTML = '';
                projects.forEach(project => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<a href="${project.html_url}" target="_blank">${project.name}</a>`;
                    githubProjectsList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Ошибка при получении данных с GitHub API', error));
    }
    getGitHubProjects();
});
