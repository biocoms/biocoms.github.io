// Fade-in Animation for Research Areas
const researchAreas = document.querySelectorAll('.research-area');

function handleScroll() {
    researchAreas.forEach((area) => {
        const rect = area.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            area.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Trigger on page load
