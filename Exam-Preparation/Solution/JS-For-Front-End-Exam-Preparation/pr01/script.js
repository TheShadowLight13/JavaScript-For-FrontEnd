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

renderAllContinents(continents);
renderSingleContinent(continents['Europe']);
renderSingleCountry(continents['Europe']['countries']['Bulgaria']);


function renderAllContinents(continents) {
    for (let continentKey in continents) {
        let continent = continents[continentKey];
        let continentName = continent['name'];
        console.log(continentName);
    }
}

function renderSingleContinent(continent) {
    let continentName = continent['name'];
    console.log(continentName);
    let countries = continent['countries'];
    if (countries) {
        console.log('Countries:');
        for (let countryKey in countries) {
            let country = countries[countryKey];
            let countryName = country['name'];
            console.log('$$$' + countryName);
        }
    }
}

function renderSingleCountry(country) {
    let countryName = country['name'];
    let countryCapital = country['capital'];
    let countryOfficialLanguage = country['officialLanguage'];
    let countryPopulation = Number(country['population']);
    let countryArea = Number(country['area']);
    let countryPoliticalStatus = country['politicalStatus'];
    let countryOfficialCurrency = country['officialCurrency'];
    console.log(countryName);
    console.log('Capital: ' + countryCapital);
    console.log('Official Language: ' + countryOfficialLanguage);
    console.log('Population: ' + countryPopulation);
    console.log('Area: ' + countryArea + ' km2');
    console.log('Political Status: ' + countryPoliticalStatus);
    if (countryPoliticalStatus === 'Republic') {
        let countryPresident = country['president'];
        console.log('President: ' + countryPresident)
    } else {
        let countryMonarch = country['monarch'];
        console.log('Monarch: ' + countryMonarch)
    }

    console.log('Official Currency: ' + countryOfficialCurrency);
}