// fetch = function used for making http requests to fetch resources
//         (json style data, images, files)
//         simplifies asynchronous data fetching in javascript and
//         used for interacting with api's to retrieve and send
//         data asynchronously over the web
//         fetch(url, {options})

// using fetch()
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok) {
            throw new Error("coul not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error));
*/

// using async()
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if(!response.ok) {
            throw new Error("could not fetch resouce");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonNameDisplay = data.name;
        const pokemonIdDisplay = data.id;
        const pokemonWeightDisplay = data.weight;
        const imgElement = document.getElementById("pokemonSprite");
        const h3Element = document.getElementById("pokemonNameDisplay");
        
        h3Element.textContent = `Name: ${pokemonNameDisplay}\nID: ${pokemonIdDisplay}\nWeight: ${pokemonWeightDisplay}`;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        imgElement.style.width = "200px"
    }
    catch(error) {
        console.error(error);
    }
}

fetchData();