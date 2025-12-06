// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle clicks on the glitch buttons inside portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        const button = card.querySelector('.spiderverse-button');
        if (button) {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default button action
                event.stopPropagation(); // Stop event from bubbling to the card link
                window.location.href = card.href; // Navigate to the card's link
            });
        }
    });

    // Fade in portfolio cards on page load
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
});

