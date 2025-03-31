// Update the initLevel3 function to handle both versions
function initLevel3() {
    const options = document.querySelectorAll('.choice-option');
    
    options.forEach(option => {
        // Hover effect
        option.addEventListener('mouseenter', () => {
            option.style.transform = 'scale(1.05)';
            const light = option.querySelector('.light-image');
            if(light) {
                light.style.transform = 'scale(1.15)';
            }
        });
        
        option.addEventListener('mouseleave', () => {
            option.style.transform = '';
            const light = option.querySelector('.light-image');
            if(light) {
                light.style.transform = '';
            }
        });
        
        // Click handler
        option.addEventListener('click', function() {
            // Visual feedback
            this.style.boxShadow = '0 0 20px currentColor';
            const light = this.querySelector('.light-image');
            if(light) {
                light.style.boxShadow = '0 0 40px currentColor';
            }
            
            // Disable other options
            options.forEach(opt => {
                opt.style.pointerEvents = 'none';
            });
            
            // Navigate after delay
            setTimeout(() => {
                const choice = this.getAttribute('data-choice');
                if(document.querySelector('[data-choice="red"]')) {
                    // Door version
                    window.location.href = choice === 'red' 
                        ? 'ending1.html' 
                        : 'ending3.html';
                } else {
                    // Light version
                    window.location.href = choice === 'green' 
                        ? 'ending1.html' 
                        : 'ending3.html';
                }
            }, 500);
        });
    });
}