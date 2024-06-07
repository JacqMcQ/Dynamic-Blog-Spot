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

const postArray = [];
const formJSON = JSON.stringify(formData);
postArray.push(formJSON);
localStorage.setItem('post-array',postArray);
localStorage.setItem('test',JSON.stringify(formData));
window.location.href = 'blog.html';
});

window.addEventListener('popstate', function(event) {
    if(window.location.href.endsWith('blog.html')) {
    console.log('Navigating to blog.html');
    
}

});