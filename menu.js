const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const randomArticleButton = document.getElementById('randomArticle');

// Массив ссылок на статьи
const articles = [
    'places.html',
    'places2.html',
    'places3.html',
    'paintings.html',
    'writers.html',
    'artists.html',
    'books2.html',
    'architects.html',
];

// Функция для перехода на случайную статью
randomArticleButton.addEventListener('click', function(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];
    window.location.href = randomArticle;
});

// Открытие и закрытие меню
menuButton.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Закрытие меню при клике вне его области
window.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});