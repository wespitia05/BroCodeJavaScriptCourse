// fetch = function used for making http requests to fetch resources
//         (json style data, images, files)
//         simplifies asynchronous data fetching in javascript and
//         used for interacting with api's to retrieve and send
//         data asynchronously over the web
//         fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok) {
            throw new Error("coul not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error));