let locationData = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};

function printPokemons(pokemons, resultDiv) {
    let pokemonsDiv = $('<div class="pokemons">');
    pokemonsDiv.appendTo(resultDiv);

    for (let key in pokemons) {
        let pokemon = pokemons[key];
        let name = pokemon['name'];
        let power = pokemon['power'];
        let evolvedFrom = pokemon['evolvedFrom'];
        let evolvesTo = pokemon['evolvesTo'];

        let pokemonDiv = $('<div class="pokemon">');
        pokemonDiv.appendTo(pokemonsDiv);
        pokemonDiv.append(`<div class="pokemon-title">${name}</div>`);
        let pokemonStatsDiv = $('<div class="pokemon-stats">');
        pokemonStatsDiv.appendTo(pokemonDiv);
        pokemonStatsDiv
            .append(`<div class="pokemon-name">Name: ${name}</div>`)
            .append(`<div class="pokemon-power">Power: ${power}pp</div>`)
            .append(`<div class="pokemon-evolved-from">Evolved From: ${evolvedFrom}</div>`)
            .append(`<div class="pokemon-evolves-to">Evolves To: ${evolvesTo}</div>`);
    }
}

function renderDataInHTML(location) {
    let containerDiv = $('<div class="container">');
    let body = $('body');
    containerDiv.appendTo(body);
    let resultDiv = $('<div class="result">');
    resultDiv.appendTo(containerDiv);

    let locationName = location['name'];
    let longitude = Number(location['longitude']);
    let latitude = Number(location['latitude']);
    let pokemons = location['pokemons'];

    let locationDiv = $('<div class="location">');
    locationDiv.appendTo(resultDiv);
    locationDiv
        .append(`<h1 class="location-name">Location: ${locationName}</h1>`);
    let locationCoordinatesDiv = $('<div class="location-coordinates">');
    locationCoordinatesDiv.appendTo(locationDiv);
    locationCoordinatesDiv
        .append(`<h2 class="location-longitude">Longitude: ${longitude}</h2>`)
        .append(`<h2 class="location-latitude">Latitude: ${latitude}</h2>`);

    if (pokemons) {
        printPokemons(pokemons, resultDiv);
    }
}

renderDataInHTML(locationData);
