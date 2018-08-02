"use strict"; 

function capitalLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
};

const images = ["../images/superman.jpg", "../images/bateman.jpg", "../images/huey.jpg", "../images/charlie.jpg", "../images/batemanMeet.jpg", "../images/cat.jpg", "../images/chardee-macdennis.jpg", "../images/disney.jpg"]
// function loopThruArray (array) {
//     array.forEach()
// };


function putAttractionTypesToDom (result) {
    let fragment = document.createDocumentFragment();
    // let cardDeck = document.createElement("div");
    // cardDeck.className = "card-deck justify-content row";
    ///////putting in the loop///////
    let header = document.createElement('h1');
    header.className = "col-md-12"
    header.innerText = "Attraction Varieties";
    fragment.appendChild(header);
    let count = 0;
    result.forEach(function (type) {
        let card = document.createElement("div");
        card.className = "card col-sm-4 mx-auto";
        let createImgHolder = document.createElement("div");
        createImgHolder.className = "image-holder";
        let img = document.createElement('img');
        img.className = "card-img-top";
        img.src = `${images[count]}`;
        createImgHolder.appendChild(img);
        card.appendChild(createImgHolder);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.innerHTML = `<h5 class="card-title">${capitalLetter(type.name)}</h5>`;
        // textArea.innerHTML = capitalLetter(type.name);
        card.appendChild(cardBody);
        fragment.appendChild(card);
        count += 1;
    });
    //////////end the loop///////
    // fragment.appendChild(cardDeck);
    return fragment
};

module.exports = putAttractionTypesToDom;

