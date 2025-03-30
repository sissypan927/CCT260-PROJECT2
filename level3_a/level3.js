function makeChoice(choice) {
    // Determine which page we're on
    const currentPage = window.location.pathname.split('/').pop();
    
    // Handle choices for both pages
    if (currentPage === 'level3_a.html') {
        // Basement path choices
        if (choice === 'red') {
            window.location.href = 'ending1.html';
        } else if (choice === 'blue') {
            window.location.href = 'ending3.html';
        }
    } else if (currentPage === 'level3_b.html') {
        // Second floor path choices
        if (choice === 'green') {
            window.location.href = 'ending1.html';
        } else if (choice === 'yellow') {
            window.location.href = 'ending3.html';
        }
    }
}

// Add animation effects when elements are clicked
document.querySelectorAll('.door, .light').forEach(element => {
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});