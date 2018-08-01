"use strict"; 

let db = require('./db-calls.js');

let attractions = {};

db.fetchAttractions()
.then(result => {
    attractions = result;
    console.log(result);
    return attractions
})
.then(result => {
    let fragment = document.createDocumentFragment();
    result.forEach(type => {
        let card = document.createElement("div");
        card.className = "col-md-4";
        let header = document.createElement("h3");
        header.innerText = type.name;
        card.appendChild(header);
        let description = document.createElement("p");
        description.innerHTML = type.description;
        card.appendChild(description);
        fragment.appendChild(card);

    });
    return fragment
})
.then(result => {
    document.querySelector("#allAttractions").appendChild(result);
});

module.exports = attractions;