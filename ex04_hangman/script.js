const randomWords = [
  'condition',
  'bottom',
  'lineage',
  'trip',
  'reporter',
  'paper',
  'colorful',
  'agent',
  'justify',
  'torture',
  'cap',
  'earthflax',
  'payment',
  'research',
  'picture',
  'garage',
  'honor',
  'memorial',
  'planet',
  'biography',
  'profound',
  'rumor',
  'gear',
  'bedroom',
  'orthodox',
  'penalty',
  'grief',
  'promote',
  'roof',
  'suite',
  'moving',
  'killer',
  'museum',
  'essay',
  'fever',
  'dignity',
  'shadow',
  'enjoy',
  'kill',
  'shy',
  'counter',
  'pawn',
  'button',
  'bullet',
  'skin',
  'rate',
  'shop',
  'consider',
  'other',
  'prospect',
];
const hangManImage = document.querySelector('#image');
const solutionContainer = document.querySelector('#solution-container');
const winOrLoseContainer = document.querySelector('#win-lose-container');
const letterContainer = document.querySelector('#letter-container');
const gameState = {
  word: [],
  hangman: 1,
  turn: 1,
  lettersFound: 0,
  won: false,
  lost: false,
};

function createNewSolutionLetter() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('solution-letter');
  return newDiv;
}

function selectRandomWord() {
  // return random word from the randomWords array and split it up into an array
    let randomIndex = Math.floor(Math.random() * randomWords.length);
    let randomWord = randomWords[randomIndex].split('');
    return randomWord;
}
//console.log(selectRandomWord());
function emptySolutionContainer() {
  // empty the solutionContainer (remove all .letter elements)
    solutionContainer.innerHTML = '';
}

function fillSolutionContainer() {
  // after emptying the solutionContainer
  // fill it up with one solutionLetter (use createNewSolutionLetter)
  // per letter in the current gamestate.word
  emptySolutionContainer();

  console.log(gameState.word);
  for(let i = 0; i < gameState.word.length; i++){
    let newDiv = createNewSolutionLetter();
    solutionContainer.appendChild(newDiv);  
  }
}

function removeClassesFromAllLetters() {
  // remove the failed and success classes from all .letter
  // use [node-element].classList.remove();
  let letterClasses = document.querySelectorAll('.letter');
  letterClasses.forEach(letterClass => {
    letterClass.classList.remove('failed' , 'succes');
  });


}

function updateHangmanPicture() {
  // change the hangman picture source to the appropriate image (gameState.hangman)
  // the source of each image looks like this: 'images/hangman01.png'
  // of course the number changes, from 01 to 09
    hangManImage.src = `images/hangman0${gameState.hangman}.png`;
}

function initGameState() {
  // this function initialises the gameState and playfield (html)
  // you do not have to change this function
  gameState.word = selectRandomWord();
  gameState.hangman = 1;
  gameState.turn = 1;
  gameState.lettersFound = 0;
  gameState.won = false;
  gameState.lost = false;
  fillSolutionContainer();
  winOrLoseContainer.textContent = '';
  removeClassesFromAllLetters();
  updateHangmanPicture();
}

function winOrLose() {
  // checks if the player has won or lost,
  // if so the winOrLoseContainer text should be updated with an appropriate message
  if(gameState.hangman == 9){
    gameState.lost = true;
    return winOrLoseContainer.textContent = 'Too bad you failed to find the word';
  } else if(gamestate.lettersFound == gameState.word.length){
    gameState.won = true;
    return winOrLoseContainer.textContent = 'You have found the word';
  }
}
function letterClicked(event) {
  // this is of course the heart of this game,
  // find out which letter is clicked
  // check if that letter is in in the current word (beware of upper/lowercase)
  // if so fill in the .solution-letter (top tip: use '.solution-letter:nth-child(2)' in your querySelector)
  // update the gameState
  // add the correct class to the clicked letter (event.target)
  // add 'success' when the letter is found
  // add 'failed' when the letter is not (use [node-element].classList.add())
  // don't forget to update the hangman picture
  // make sure .letter with a success or .failed class can not be clicked
  const chosenLetter = event.target;
  if(chosenLetter.matches('.letter')){
    for(let i = 0; i < gameState.word.length; i++){
    }
  }

}
initGameState();

letterContainer.addEventListener('click', letterClicked);
winOrLoseContainer.addEventListener('click', initGameState);
