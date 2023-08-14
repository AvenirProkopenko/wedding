

const menuLinks = document.querySelectorAll('.menu-link');
const contents = document.querySelectorAll('.content');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.target;
        contents.forEach(content => {
            if (content.id === target) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
        menuLinks.forEach(menuLink => {
            menuLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Получение элементов модального окна и крестика
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');

// Открытие модального окна при нажатии на кнопку "ОТВЕТИТЬ"
const replyButton = document.querySelector('.reply-button');
replyButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Закрытие модального окна при нажатии на крестик
closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Закрытие модального окна при щелчке вне окна
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});






