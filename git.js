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
                    listItem.classList.add('project-item');

                    const projectName = document.createElement('h3');
                    projectName.textContent = project.name;

                    const projectDescription = document.createElement('p');
                    projectDescription.textContent = project.description || 'Описание отсутствует';

                    const projectLink = document.createElement('a');
                    projectLink.href = project.html_url;
                    projectLink.target = '_blank';
                    projectLink.textContent = 'Посмотреть на GitHub';

                    listItem.appendChild(projectName);
                    listItem.appendChild(projectDescription);
                    listItem.appendChild(projectLink);

                    githubProjectsList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Ошибка при получении данных с GitHub API', error));
    }
    getGitHubProjects();
});
