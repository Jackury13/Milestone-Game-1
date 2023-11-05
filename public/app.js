const wordDisplay = document.querySelector(".word-display")
const livesLeft = document.querySelector(".points p")
const keyboard = document.querySelector(".keyboard")


let currentWord, wrongGuessCount = '0';
const maxGuesses = 6;
//selecting random word and hint from word-list.js file
const getRandomWord = function() {
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word)
    document.querySelector(".hint-text p").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

    
// function to see if the selected letter is in the random word.
const initHorde = (_button, clickedLetter) => {

    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); 
            }
        });
        
    } else {
        wrongGuessCount++;
    }
    livesLeft.innerText = `${wrongGuessCount} / ${maxGuesses}`;
}
//keyboard
for(let i = 97; i<122; i++) {
    const button = document.createElement("button");
    button.classList.add("letters")
    button.innerText = String.fromCharCode(i)
    keyboard.appendChild(button);
    button.addEventListener("click", (e) => initHorde(e.target, String.fromCharCode(i)));
}

getRandomWord();





























