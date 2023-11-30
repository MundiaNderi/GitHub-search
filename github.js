require("dotenv").config()

import accessToken from .env

const accessToken = 

fetch(' https://api.github.com/user', {
    headers: {
        Authorization: `token${accessToken}`
    }
})

.then(response => {
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('There was a problem with the request:', error));