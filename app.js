// import functions and grab DOM elements

import  { jollyNumber } from "./utils.js";

const guessButton = document.getElementById('guess-button');
const replayButton = document.getElementById('replay-button');
const span = document.getElementById('results');
const userInput = document.getElementById('user-input');

const rightAnswer = 7;

    let counter = 4

guessButton.addEventListener('click', () => {
    counter--
    const usernumber = userInput.valueAsNumber;
    const results = jollyNumber(usernumber, rightAnswer);
    if (counter > 0) {
        if (results === 0) {
            span.textContent = "winner winner chicken dinner";
        } else if (results === -1) {
            span.textContent = "Too highhh";
        } else {
            span.textContent = "Too looooww";
        }


        
    } else {
      span.textContent = "out of tries";
    }

});


// initialize state

// set event listeners to update state and DOM