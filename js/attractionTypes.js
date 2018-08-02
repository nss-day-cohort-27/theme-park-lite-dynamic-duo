"use strict";

let db = require('./db-calls.js');
let attractionTypesToDom = require("./attractionTypesToDom.js");



let attractionTypes = {};



db.fetchTypes()
   .then((result) => {
       console.log("types", result);
        attractionTypes = result;
        return attractionTypes
}).then(attractionTypesToDom)
.then(result => {
    let divHolder = document.querySelector("#attractionType");
    divHolder.appendChild(result);
});

 
// console.log("should be types",  gettingData);

module.exports = attractionTypes;