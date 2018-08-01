"use strict";

let db = require('./db-calls.js');

let parkInfo = {};

db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
   console.log(result);
   return parkInfo;
})
.then((result) => {
    let fragment = document.createDocumentFragment();
    let card = document.createElement("div");
    let head = document.createElement("h3");
    let textArea = document.createElement("p");
    let textArea2 = document.createElement("p");
    let hours = document.createElement("p");
    card.className = "col-md-12 mx-auto shadow";
    head.innerText = `${result[0].name}`;
    textArea.innerText = `${result[0].description}`;
    textArea2.innerText = `${result[0].location}`;
    hours.innerText = `We are open from ${result[0].operating_hours[0].opening}AM until ${result[0].operating_hours[0].closing}PM`;
    card.appendChild(head);
    card.appendChild(textArea);
    card.appendChild(textArea2);
    card.appendChild(hours);
    fragment.appendChild(card)
    return fragment
})
.then((result) => {
    let divHolder = document.querySelector("#parkInfo")
    divHolder.appendChild(result)
});

module.exports = parkInfo;
