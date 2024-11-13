let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    let countriesName = [];
    let countriesRegion = [];
    let countriesSubregion = [];
    let countriesPopulation = [];

    for (let country of countries) {
        countriesName.push(country.name.common); // Adjusted to access common name
        countriesRegion.push(country.region);
        countriesSubregion.push(country.subregion);
        countriesPopulation.push(country.population);
    }

    console.log("Country Names:", countriesName);
    console.log("Regions:", countriesRegion);
    console.log("Sub-regions:", countriesSubregion);
    console.log("Populations:", countriesPopulation);
};

xhr.send();
