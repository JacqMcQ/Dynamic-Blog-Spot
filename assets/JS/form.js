function handleFormsubmit(event) {
    event.preventDefault();

    const formData = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value

    };

localStorage.setItem('formData', JSON.stringify(formData));

console.log(formData);
}
