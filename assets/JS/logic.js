const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'dark';

container.classList.add(mode);

themeSwitcher.addEventListener('click', function () {
  mode = mode === 'light' ? 'dark' : 'light';
  container.setAttribute('class', mode);
});
const textInput = document.getElementById('textInput');
const contentBox = document.getElementById('contentBox');
