const toggleEl = document.querySelector('.toggle');
const closeEl = document.querySelector('.close');
const containerEl = document.querySelector('.container');

toggleEl.addEventListener('click', () => {
    toggleEl.classList.add('active');
    containerEl.classList.add('active');
});

closeEl.addEventListener('click', () => {
    toggleEl.classList.remove('active');
    containerEl.classList.remove('active');
});