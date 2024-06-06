const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

function handleFormsubmit(event) {
    event.preventDefault();

    const formData = {
        username: document.localStorage.getElementById('username').value,
        title: document.localStorage.getElementById('title').value,
        content: document.localStorage.getElementById('content').value

    };

localStorage.setItem('formData', JSON.stringify(formData));
console.log(formData);
window.location.href = 'blog.html';

}

