// Theme management
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Toggle theme function
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Add event listener to theme toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to current nav item
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath) {
        // Handle anchor links (e.g., #about, #contact)
        if (linkPath.startsWith('#')) {
            // Anchor links are only active on index.html
            if (currentLocation.endsWith('index.html') || currentLocation.endsWith('/')) {
                // Active state for anchor links is handled by scroll position, not needed here
            }
        } else {
            // Handle page links (e.g., cv.html, index.html)
            const pageName = linkPath.split('#')[0];
            if (currentLocation.endsWith(pageName)) {
                link.classList.add('active');
            }
        }
    }
});
