const themeToggle = document.getElementById('themeToggle');
const themeText = document.getElementById('themeText');
const moonIcon = document.getElementById('moonIcon');
const themeIcon = document.getElementById('themeIcon');
const sunIcon = document.getElementById('sunIcon');

themeToggle.addEventListener('click', toggleTheme);
themeToggle.addEventListener('touchstart', toggleTheme);

function toggleTheme(event) {
    event.preventDefault();

    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // Show sun, hide moon
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        
        // Change background color to dark
        body.style.backgroundColor = '#141D2F';
        statistics.style.backgroundColor = '#141D2F';
        search.style.backgroundColor = '#141D2F'; // Darker color for search
        octocat.style.backgroundColor = '#14142F';
    } else {
        // Show moon, hide sun
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        
        // Reset background color
        body.style.backgroundColor = '#FEFEFE';
        statistics.style.backgroundColor = '#FEFEFE'; 
        search.style.backgroundColor = '#FEFEFE'; // Reset search background
        octocat.style.backgroundColor = '#FEFEFE'
    }
}
