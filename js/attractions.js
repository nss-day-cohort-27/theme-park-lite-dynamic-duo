"use strict"; 

let db = require('./db-calls.js');
let attractionsToDom = require('./attractionsToDom.js');

let attractions = {};

db.fetchAttractions()
.then(result => {
    attractions = result;
    console.log(result);
    return attractions
})
.then(attractionsToDom)
.then(result => {
    document.querySelector("#allAttractions").appendChild(result);
});

module.exports = attractions;