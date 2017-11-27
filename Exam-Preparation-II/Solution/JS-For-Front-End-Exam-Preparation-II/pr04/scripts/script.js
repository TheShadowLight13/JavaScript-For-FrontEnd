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
            .append(`<div class="pokemon-power">Power: ${power}</div>`)
            .append(`<div class="pokemon-evolved-from">Evolved From: ${evolvedFrom}</div>`)
            .append(`<div class="pokemon-evolves-to">Evolves To: ${evolvesTo}</div>`);
    }
}

function renderDataInHTML(locationData) {
    if (!locationData) {
        printError();
        return;
    }

    let resultDiv = $('.result');
    resultDiv.empty();

    let locationName = locationData['name'];
    let longitude = Number(locationData['longitude']);
    let latitude = Number(locationData['latitude']);
    let pokemons = locationData['pokemons'];

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

    attachAccordion();
    resultDiv.css('display', 'block');
}

function printError() {
    let resultDiv = $('.result');
    resultDiv.empty();
    let errorDiv = $('<div class="error">Error loading location.</div>');
    errorDiv.appendTo(resultDiv);
    resultDiv.css('display', 'block');
}

function attachButtonEvent() {
    let loadButton = $('button[type="submit"]');
    let locationInput = $('.location-input');
    let databaseBaseURL = 'https://pokemoncodex.firebaseio.com';
    loadButton.click(function (event) {
        event.preventDefault();
        let locationInputVal = locationInput.val();
        if (locationInputVal.trim() !== '') {
            locationInput.val('');
            let locationURL = databaseBaseURL + `/locations/${locationInputVal}.json`;
            $.ajax({
                url: locationURL,
                success: renderDataInHTML,
                error: printError
            });
        }
    });
}

function attachAccordion() {
    $('.pokemon-title').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.pokemon-stats').removeClass('show');
            $this.parent().parent().find('.pokemon-stats').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
}

function attachEvents() {
    attachButtonEvent();
}

attachEvents();