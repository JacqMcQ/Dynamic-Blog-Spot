
document.addEventListener("DOMContentLoaded", function() {
    const postsHist = document.getElementById("blog-posts"); 
    const localPosts = JSON.parse(localStorage.getItem("post-array")) || []; 
    console.log(localPosts);
    for (let i = 0; i < localPosts.length; i++) { 
        const postEl = document.createElement("div");
        postEl.classList.add("formData");
        postEl.innerHTML = `
            <h2>${localPosts[i].username}</h2>
            <p>${localPosts[i].title}</p>
            <p>${localPosts[i].content}</p>
        `;
        postsHist.appendChild(postEl); 
    }
});

document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});
