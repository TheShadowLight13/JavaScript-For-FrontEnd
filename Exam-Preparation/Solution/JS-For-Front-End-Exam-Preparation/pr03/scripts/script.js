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
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
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
        attachEventOnContinent(continentDiv, continent);
        continentsDiv.append(continentDiv);
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
    continentCountryDiv.empty();
    continentCountryDiv.css('display', 'block');
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
    $('<h3 class="countries-title">Countries</h3>')
        .appendTo(continentDataDiv);
    let countriesDiv = $('<div class="countries"></div>');
    let countriesDropDown = $('<select class="dropdown-select">' +
        '<option disabled="" selected="" value=""> -- select an option -- </option>' +
        '</select>');
    if (countries) {
        attachEventOnCountries(countriesDropDown, countries);
        for (let countryKey in countries) {
            let country = countries[countryKey];
            let countryName = country['name'];
            let countryDropDown = $(`<option value="${countryName}">${countryName}</option>`);
            countryDropDown.appendTo(countriesDropDown);
        }
    }

    countriesDropDown.appendTo(countriesDiv);
    continentDataDiv.append(countriesDiv);
    let continentImageDiv = $('<div class="continent-image">' +
        `<img src="images/${continentName.toLowerCase()}.png">` +
        '</div>');
    continentImageDiv.appendTo(continentDataDiv);
}

function getSelectedCountry(selectedItemText, countries) {
    for (let countryKey in countries) {
        let country = countries[countryKey];
        let countryName = country['name'].toLowerCase();
        if (countryName === selectedItemText) {
            return country;
        }
    }
}

function attachEventOnContinent(continentDiv, continent) {
    let continentDataDiv = $('.continent-data');
    let continentCountryDiv = $('.continent-country');
    continentDiv.click(function (event) {
        let clickedContinent = $(this);
        if (clickedContinent.hasClass('show')) {
            clickedContinent.removeClass('show');
            continentDataDiv.css('display', 'none');
            continentCountryDiv.css('display', 'none');
        } else {
            $('.continent').removeClass('show');
            clickedContinent.addClass('show');
            continentDataDiv.empty();
            continentCountryDiv.empty();
            renderCountries(continent);
            continentDataDiv.css('display', 'block');
        }
    });
}

function attachEventOnCountries(countryDropDown, countries) {
    countryDropDown.click(function (event) {
        let selectedItem = $('.dropdown-select option:enabled:selected');
        let selectedItemText = selectedItem.text().toLowerCase();
        if (selectedItemText !== '') {
            let selectedCountry = getSelectedCountry(selectedItemText, countries);
            renderCountryInfo(selectedCountry);
        }
    });
}

renderDataInHTML(continents);
