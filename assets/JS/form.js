const form = document.getElementById('form');
const errorMessage = document.createElement('div');
errorMessage.style.color = 'red';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;

    if (username === '' || title === '' || content === '') {
        event.preventDefault();

    } else {
        let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];
        const formData = {
            username: username,
            title: title,
            content: content
        };
        formDataArray.push(formData);
        localStorage.setItem('formData', JSON.stringify(formDataArray));

        window.location.href = 'blog.html';
    }
});
