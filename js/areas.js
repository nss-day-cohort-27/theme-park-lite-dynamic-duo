"use strict";

let db = require('./db-calls.js');
let writeToDom = require("./areasToDom.js");


let areaInfo = {};

db.fetchAreas()
.then((result) => {
    areaInfo = result;
    console.log(result);
    return areaInfo
})
.then(writeToDom)
.then((result) => {
    let divHolder = document.querySelector("#parkAreas")
    divHolder.appendChild(result)
});

module.exports = areaInfo;

// (result) => {
//     let fragment = document.createDocumentFragment();
//     // vvvvv Puts this in loop vvvvvv
//     result.forEach(element => {
//     let card = document.createElement("div");
//     let head = document.createElement("h3");
//     let textArea = document.createElement("p");
//     card.className = "col-md-6 mx-auto shadow";
//     card.style = `background-color: #${element.colorTheme}`;
//     head.innerText = `${element.name}`;
//     textArea.innerText = `Here is ${element.description}`;
//     card.appendChild(head);
//     card.appendChild(textArea);
//     fragment.appendChild(card)
//     console.log("loop");
// });// end loop
//     return fragment });