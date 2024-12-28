// Typing Effect for Intro Section
const typingText = "Advancing systems biology with computational precision...";
const typingElement = document.getElementById("typing-effect");

let index = 0;
function typeEffect() {
    if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Fade-in Animation for News Section
const newsItems = document.querySelectorAll('.news-item');

function handleScroll() {
    newsItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Trigger on page load

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    function handleScroll() {
        galleryItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load
});

