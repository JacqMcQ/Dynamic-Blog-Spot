
document.addEventListener("DOMContentLoaded", function() {
    const postsHist = document.getElementById("blog-posts"); 
    const localPosts = JSON.parse(localStorage.getItem("posts")) || []; 
    for (let i = 0; i < localPosts.length; i++) { 
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = `
            <h2>${post.data.blog-title}</h2>
            <p>${post.data.username}</p>
            <p>${post.data.blog-content}</p>
        `;
        postsHist.appendChild(postEl); 
    }
});

document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});
