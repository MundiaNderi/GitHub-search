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
    let searchBox = document.getElementById('search-box');
    let searchText = document.getElementById('search-text')
    
    // Add an event listener on the input field
    searchBox.addEventListener('click', function(e) {
        e.preventDefault();

        // Access the input value when the button is clicked
        let userInput = searchText.value;

        var originalName = userInput.split(' ').join('')
        alert(originalName)

        fetch("https://api.github.com/users/"+originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
        })

    })
})




// Feed the data to the html page 

const userData = {
    avatar_url : "https://avatars.githubusercontent.com/u/98798719?v=4",
    name: "Serah Nderi",
    created_at : "2022-02-01T05:53:55Z",
    login: "MundiaNderi",
    bio: "Junior Software Engineer",
    public_repos: "37",
    followers: '13',
    following: '23',
    location: 'Nairobi',
    twitter_username: "nderisarah",
    ulr: "",
    github: "",

}

// Access HTML Elements by their IDs
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const date = document.getElementById('created');
const handle = document.getElementById('handle');
const bio = document.getElementById('bio');
const repo = document.getElementById('repo');
const follow = document.getElementById('follow')
const following = document.getElementById('following')


// Populate HTML elements with the user data
avatar.src = userData.avatar_url;
name.textContent = userData.name;
date.textContent = userData.created_at;
handle.textContent = '@' + userData.login;
bio.textContent = userData.bio;
repo.textContent = userData.public_repos;
follow.textContent = userData.followers;
following.textContent = userData.following;
city.textContent = userData.location
twitter.textContent = userData.twitter_username;
