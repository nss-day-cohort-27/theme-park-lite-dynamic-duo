"use strict";

let db = require('./db-calls.js');



let attractionTypes = {};

function capitalLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}


db.fetchTypes()
   .then((result) => {
       console.log("types", result);
        attractionTypes = result;
        return attractionTypes
}).then(result => {
    let fragment = document.createDocumentFragment();
    ///////putting in the loop///////
    result.forEach(function (type) {
    let card = document.createElement("div");
    card.className = "col-md-4";
    let textArea = document.createElement("p");
    textArea.innerHTML = capitalLetter(type.name);
    card.appendChild(textArea);
    fragment.appendChild(card);
    });
    //////////end the loop///////
    return fragment
})
.then(result => {
    let divHolder = document.querySelector("#attractionType");
    divHolder.appendChild(result);
});

 
// console.log("should be types",  gettingData);

module.exports = attractionTypes;