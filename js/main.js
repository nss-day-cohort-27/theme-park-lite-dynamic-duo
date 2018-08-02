"use strict";

// This is here to get you started. You may remove or move as necessary.
let parkInfo = require('./parkInfo.js');
let attractionTypes = require("./attractionTypes.js")
let areaDbInfo = require('./areas.js');
let attractions = require("./attractions.js");

$("#parkInfo").click(function(){
    let target = document.querySelector("#parkInfo");
    let newDiv = document.createElement("div");
    newDiv.className = "batImage";
    newDiv.innerHTML = `<img src="https://www.thereminder.com/Opinion/notefromthepublish/climb-til-your-dream-comes-true/Batman-Robin-climbing.gif,0" alt="Batman & Robin"><p>Climbing out of the Pit of Depsair</p>`;
    target.appendChild(newDiv);
})
