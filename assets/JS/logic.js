const modeSwitcher = document.querySelector('#darkmode');

let mode = 'light'; 

modeSwitcher.addEventListener('click', function () {
    
    if (mode === 'light') {
        mode = 'dark';
    } else {
        mode = 'light';
    }

    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
});