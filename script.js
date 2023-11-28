const themeToggle = document.getElementById('themeToggle');
const themeText = document.getElementById('themeText');
const moonIcon = document.getElementById('moonIcon');
const themeIcon = document.getElementById('themeIcon');


themeToggle.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeText.textContent = 'Light';
        themeIcon.style.display = '#141D2F'; // Change color to a darker shade
        moonIcon.setAttribute('d', 'images/002-sun.svg'); // Change color to a darker shade
    } else {
        themeText.textContent = 'Dark';
        themeIcon.style.fill = '#141D2F';
        moonIcon.setAttribute('D', 'images/moon.svg') 
        // Replace the sun SVG with the moon SVG 
    }
}) 