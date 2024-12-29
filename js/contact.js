// Smooth scroll effect for anchor links.
document.querySelectorAll('a[href^="http"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        window.open(anchor.getAttribute('href'), '_blank');
    });
});
