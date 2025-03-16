const items = document.querySelectorAll('.gallery__item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

function updateGallery(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateGallery(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateGallery(currentIndex);
});

// Клик по изображению для переключения
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

updateGallery(currentIndex);