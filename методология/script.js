const words = [
    'Mars rug', 'Keyboard sticker', 'Powerbank', 'USB flash drive', 
    'Smartphone', 'Playstation 5', 'Yandex Station', 'Planshet Samsung'
];

const searchInput = document.getElementById('search');
const boxes = document.querySelectorAll('.box');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    boxes.forEach(box => {
        const title = box.querySelector('h3').innerText.toLowerCase();
        
        if (title.includes(query)) {
            box.style.display = 'block'; // Показываем карточку
        } else {
            box.style.display = 'none'; 
        }
    });

    if (query === '') {
        boxes.forEach(box => box.style.display = 'block'); // Если поле пустое, показываем все
    }
});