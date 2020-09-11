fetch("https://api.github.com/users/ayush015")
.then((response) => {

return response.json();
})
.then((data) => {
    console.log("Your Followers on Github :-", data.followers);
    console.log("Your Public Repo on Github :-", data.public_repos);
    console.log("Your Name on Github :-", data.name);
    console.log("number of people you are following on Github :-", data.following);
})
.catch();