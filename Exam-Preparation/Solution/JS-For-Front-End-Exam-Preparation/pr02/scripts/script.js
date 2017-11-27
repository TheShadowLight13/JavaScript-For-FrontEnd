let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};

function renderDataInHTML(continents) {
    renderContinents(continents);
}

function renderContinents(continents) {
    let continentsDiv = $('.continents');
    for (let continentKey in continents) {
        let continent = continents[continentKey];
        let continentName = continent['name'];
        let continentDiv = $('<div class="continent">' +
                                `<h5 class="continent-title">${continentName}</h5>` +
                              '</div>');
        continentsDiv.append(continentDiv);
        renderCountries(continent);
    }
}

function appendCountryInfo(country, countryDataDiv) {
    let countryCapital = country['capital'];
    let countryOfficialLanguage = country['officialLanguage'];
    let countryPopulation = Number(country['population']);
    let countryArea = Number(country['area']);
    let countryPoliticalStatus = country['politicalStatus'];
    let countryOfficialCurrency = country['officialCurrency'];

    $('<div class="country-capital">' +
            '<strong>Capital:</strong>' +
            `<div>${countryCapital}</div>` +
        '</div>').appendTo(countryDataDiv);

    $('<div class="country-official-language">' +
            '<strong>Official Language:</strong>' +
            `<div>${countryOfficialLanguage}</div>` +
       '</div>').appendTo(countryDataDiv);

    $('<div class="country-population">' +
            '<strong>Population:</strong>' +
            `<div>${countryPopulation}</div>` +
       '</div>').appendTo(countryDataDiv);

    $('<div class="country-area">' +
            '<strong>Area:</strong>' +
            `<div>${countryArea}</div>` +
       '</div>').appendTo(countryDataDiv);

    $('<div class="country-political-status">' +
            '<strong>Political Status:</strong>' +
            `<div>${countryPoliticalStatus}</div>` +
       '</div>').appendTo(countryDataDiv);

    if (countryPoliticalStatus === 'Republic') {
        let countryPresident = country['president'];
        $('<div class="country-president">' +
                '<strong>President:</strong>' +
                `<div>${countryPresident}</div>` +
       '</div>').appendTo(countryDataDiv);
    } else {
        let countryMonarch = country['monarch'];
        $('<div class="country-monarch">' +
                '<strong>Monarch:</strong>' +
                `<div>${countryMonarch}</div>` +
       '</div>').appendTo(countryDataDiv);
    }

    $('<div class="country-official-currency">' +
            '<strong>Official Currency:</strong>' +
            `<div>${countryOfficialCurrency}</div>` +
       '</div>').appendTo(countryDataDiv);
}

function renderCountryInfo(country) {
    let countryName = country['name'];
    let continentCountryDiv = $('.continent-country');
    let countryTitleDiv = $('<div class="country-title">' +
                                `<h2>${countryName}</h2>` +
                            '</div>');
    countryTitleDiv.appendTo(continentCountryDiv);
    let countryDataDiv = $('<div class="country-data"></div>');
    appendCountryInfo(country, countryDataDiv);
    countryDataDiv.appendTo(continentCountryDiv);
}

function renderCountries(continent) {
    let continentDataDiv = $('.continent-data');
    let continentName = continent['name'];
    let continentTitle = $(`<h2 class="continent-title">${continentName}</h2>`);
    continentTitle.appendTo(continentDataDiv);
    let countries = continent['countries'];
    if (countries) {
        $('<h3 class="countries-title">Countries</h3>')
            .appendTo(continentDataDiv);
        let countriesDiv = $('<div class="countries"></div>');
        let countriesDropDown = $('<select class="dropdown-select">' +
            '<option disabled="" selected="" value=""> -- select an option -- </option>' +
            '</select>');
        countriesDropDown.appendTo(countriesDiv);
        for (let countryKey in countries) {
            let country = countries[countryKey];
            renderCountryInfo(country);
            let countryName = country['name'];
            $(`<option value="${countryName}">${countryName}</option>`)
                .appendTo(countriesDropDown);
        }

        continentDataDiv.append(countriesDiv);
    }

    let continentImageDiv = $('<div class="continent-image">' +
        `<img src="images/${continentName.toLowerCase()}.png">` +
        '</div>');
    continentImageDiv.appendTo(continentDataDiv);
}

renderDataInHTML(continents);
