let location = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};

function printPokemons(pokemons) {
    for (let key in pokemons) {
        let pokemon = pokemons[key];
        let name = pokemon['name'];
        let power = pokemon['power'];
        let evolvedFrom = pokemon['evolvedFrom'];
        let evolvesTo = pokemon['evolvesTo'];

        console.log(`###Name: ${name}`);
        console.log(`###Power: ${power}pp`);
        console.log(`###Evolved From: ${evolvedFrom}`);
        console.log(`###Evolves To: ${evolvesTo}`);
    }
}

function renderData(location) {
    let locationName = location['name'];
    let longitude = Number(location['longitude']);
    let latitude = Number(location['latitude']);
    let pokemons = location['pokemons'];

    console.log(`Location: ${locationName}`);
    console.log(`Longitude: ${longitude} Latitude: ${latitude}`);
    if (pokemons) {
        console.log('Pokemons:');
        printPokemons(pokemons);
    }
}

renderData(location);
