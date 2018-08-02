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
    let mainComponent = document.createElement("div");
    let title = document.createElement("h1");
    mainComponent.className = "mainComponent row";
    title.className = "title col-md-12";
    title.innerText = "All Attractions";
    mainComponent.appendChild(title);
    result.forEach(type => {
        let outterCard = document.createElement("div");
        let innerCard = document.createElement("div");
        let header = document.createElement("h3");
        let description = document.createElement("p");
        outterCard.className = "col-md-3 mb-4 mx-auto";
        innerCard.className = "card-body shadow-sm border rounded innerCard";
        header.innerText = type.name;
        description.innerHTML = type.description;
        innerCard.appendChild(header);
        innerCard.appendChild(description);
        outterCard.appendChild(innerCard);
        mainComponent.appendChild(outterCard);
    });
    fragment.appendChild(mainComponent);
    return fragment;
})
.then(result => {
    document.querySelector("#allAttractions").appendChild(result);
});

module.exports = attractions;