// Initialize Level 3
function initLevel3() {
    const options = document.querySelectorAll('.choice-option');
    
    options.forEach(option => {
        // Hover effect
        option.addEventListener('mouseenter', () => {
            option.style.transform = 'scale(1.05)';
        });
        
        option.addEventListener('mouseleave', () => {
            option.style.transform = '';
        });
        
        // Click handler
        option.addEventListener('click', function() {
            // Visual feedback
            this.style.boxShadow = '0 0 20px currentColor';
            
            // Disable other options
            options.forEach(opt => {
                opt.style.pointerEvents = 'none';
            });
            
            // Navigate after delay
            setTimeout(() => {
                const choice = this.getAttribute('data-choice');
                window.location.href = choice === 'red' 
                    ? 'ending1.html' 
                    : 'ending3.html';
            }, 500);
        });
    });
}

// Auto-initialize if on level3
if (document.querySelector('.choice-container')) {
    document.addEventListener('DOMContentLoaded', initLevel3);
}