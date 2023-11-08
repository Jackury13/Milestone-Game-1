const wordDisplay = document.querySelector(".word-display")
const livesLeft = document.querySelector(".points p")
const keyboard = document.querySelector(".keyboard")
const youLose = document.querySelector(".game-over")
const survive = document.querySelector(".you-survived")


let currentWord, wrongGuessCount = '0';
const maxGuesses = 6;
let correctGuesses = []


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
                    correctGuesses.push(letter);
                    wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                    _button.disabled = true; 
                }
            });
            
        } else {
            wrongGuessCount++;
            _button.disabled = true;
        }
            livesLeft.innerText = `${wrongGuessCount} / ${maxGuesses}`;

//if (wrongGuessCount === maxGuesses) return youLose(false);            console.log(correctGuesses);
            console.log(currentWord);


    if (correctGuesses.length === currentWord.length) {
        // winner div
        console.log('Winner', survive)
        survive.style.visibility = "visible"
        for(const element of correctGuesses) {
            let i = 1
            if (currentWord.includes(element)){
                if (i < currentWord.length); 
                i++;
            }     
        }
    }   


    if (wrongGuessCount === maxGuesses) {
        // loser div
        console.log('loser', youLose)
        youLose.style.visibility = "visible"
        for(const element of maxGuesses) {
            let i = 1
            if (currentWord.includes(element)){
                if (i < maxGuesses); 
                i++;
            }
        }
    }


}

//keyboard
for(let i = 97; i<123; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i)
    keyboard.appendChild(button);
    button.addEventListener('click', (e) => initHorde(e.target, String.fromCharCode(i)));
}

getRandomWord();
























