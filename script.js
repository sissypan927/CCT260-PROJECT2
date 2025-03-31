// Initialize ending page
function initEnding() {
    // Restart button functionality
    const restartBtn = document.getElementById('restartButton');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            // Use relative path to return to index
            window.location.href = '../index.html'; 
            
            // Alternative for root directory:
            // window.location.href = '/index.html';
        });
    }
    
    // Additional ending-specific effects
    console.log('Success ending loaded');
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initEnding);