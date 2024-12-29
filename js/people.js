// Scroll Animation for Team Section
const teamMembers = document.querySelectorAll('.team-member');

function handleScroll() {
    teamMembers.forEach((member) => {
        const rect = member.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            member.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Trigger on page load

// Scroll Animation for Alumni List
const alumniItems = document.querySelectorAll('.alumni-list li');

function handleAlumniScroll() {
    alumniItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleAlumniScroll);
handleAlumniScroll(); // Trigger on page load
