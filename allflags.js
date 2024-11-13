let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    let countryFlags = [];

    for (let country of countries) {
        countryFlags.push(country.flags.png); // Adjusted to access PNG flag URL
    }

    console.log("Country Flags:", countryFlags);
};

xhr.send();
