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
        search.style.backgroundColor = '#1E2A47'; // Darker color for search
        octocat.style.backgroundColor = '#1E2A47';
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

// Github Users API
// Get the search box 
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    
    searchBox.addEventListener('click', async function(e) {
        e.preventDefault();

        const searchText = document.getElementById('search-text').value.trim();
        if (searchText !== '') {
            try {
                const originalName = searchText.split(' ').join('');
                const userData = await fetchUserData(originalName);
                updateUserProfile(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        } else {
            console.error('Empty search field');
        }
    });
});

function formatDate(dateString) {
    const date = new Date(dateString);
    
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `Joined ${day} ${monthNames[monthIndex]} ${year}`;
}

// format "YYYY-MM-DDTHH:MM:SSZ"
const joinedDate = formatDate(userData.created_at);
console.log(joinedDate); // Output: Joined 25 Jan 2011


async function fetchUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching user data:', error);
    }
}

function updateUserProfile(userData) {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const date = document.getElementById('created');
    const handle = document.getElementById('handle');
    const bio = document.getElementById('bio');
    const repo = document.getElementById('repo');
    const follow = document.getElementById('follow');
    const following = document.getElementById('following');
    const city = document.getElementById('city');
    const twitter = document.getElementById('twitter');

    // Populate HTML elements with the retrieved user data
    avatar.src = userData.avatar_url;
    name.textContent = userData.name;
    date.textContent = formatDate(userData.created_at);
    handle.textContent = `@${userData.login}`;
    bio.textContent = userData.bio;
    repo.textContent = userData.public_repos;
    follow.textContent = userData.followers;
    following.textContent = userData.following;
    city.textContent = userData.location;
    twitter.textContent = userData.twitter_username;
}
