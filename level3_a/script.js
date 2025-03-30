// ===== LEVEL 3 FUNCTIONS =====
function initializeLevel3() {
  const ambientSound = new Audio('https://cdn.glitch.global/4a7df820-baeb-4964-a116-d8ae284b35e2/ambient.mp3?v=1743261972452');
  ambientSound.loop = true;
  ambientSound.volume = 0.3;
  ambientSound.play();

  document.querySelectorAll('.door-option').forEach(door => {
    door.addEventListener('click', function() {

      const selectSound = new Audio('https://cdn.glitch.global/4a7df820-baeb-4964-a116-d8ae284b35e2/select.mp3?v=1743261972453');
      selectSound.play();
      

      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);


      const doorColor = this.getAttribute('data-door');
      setTimeout(() => {
        if (doorColor === 'red') {
          window.location.href = "../ending1/ending1.html";
        } else {
          window.location.href = "../ending3/ending3.html";
        }
      }, 500);
    });
  });
}

if (document.querySelector('.doors-container')) {
  document.addEventListener('DOMContentLoaded', initializeLevel3);
}