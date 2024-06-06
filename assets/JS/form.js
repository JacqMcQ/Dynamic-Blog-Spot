const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const titleInput = document.getElementById('blog-title');
    const contentInput = document.getElementById('blog-content');

    const formData = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
    };     

localStorage.setItem('formData', JSON.stringify(formData));
console.log(formData);
window.location.href = 'blog.html';
});

window.addEventListener('popstate', function(event) {
    if(window.location.href.endsWith('blog.html')) {
    console.log('Navigating to blog.html');
    
}

});