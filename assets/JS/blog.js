document.addEventListener("DOMContentLoaded", function() {
    const postsEl =  document.getElementById('formData');
    const storedPostsEl= JSON.parse(localStorage.getItem('formData')) || [];

for (let i = 0; i < storedPostsEl.length; i++) {
    const postData = storedPostsEl[i];
    const postElement = document.createElement('div');
    postElement.className = 'formData';
    postElement.innerHTML = `
        <h2>${postData.title}</h2>
        <p>Username: ${postData.username}</p>
        <p>Blog Post: ${postData.content}</p>
    `;
    postsEl.appendChild(postElement);
}

});
document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});
