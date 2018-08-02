"use strict"; 


function writeAreasInCard (result) {
    let fragment = document.createDocumentFragment();
    // vvvvv Puts this in loop vvvvvv
    result.forEach(element => {
        let card = document.createElement("div");
        let head = document.createElement("h3");
        let textArea = document.createElement("p");
        card.className = "col-md-6 mx-auto shadow";
        card.style = `background-color: #${element.colorTheme}`;
        head.innerText = `${element.name}`;
        textArea.innerText = `Here is ${element.description}`;
        card.appendChild(head);
        card.appendChild(textArea);
        fragment.appendChild(card)
        console.log("loop");
    });
// end loop
    return fragment
};


module.exports = writeAreasInCard;