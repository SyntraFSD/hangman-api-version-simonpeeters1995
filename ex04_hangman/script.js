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
  let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  randomWord = randomWord.split("");
  return randomWord;
}

function emptySolutionContainer() {
  // solution teacher = solutionContainer.innerHTML = '';
  // empty the solutionContainer (remove all .letter elements)
  let solutionLetter = document.querySelectorAll('.solution-letter');
  for (i = 0; i <= solutionContainer.children.length - 1; i++) {
    solutionLetter[i].remove();
  }
}


function fillSolutionContainer() {
  // after emptying the solutionContainer
  emptySolutionContainer();
  // fill it up with one solutionLetter (use createNewSolutionLetter)
  let solutionWord = gameState.word;
  while (solutionContainer.children.length < solutionWord.length) {
    let div = createNewSolutionLetter();
    solutionContainer.appendChild(div);
  }
  // per letter in the current gamestate.word
}

function removeClassesFromAllLetters() {
  // remove the failed and success classes from all .letter
  // use [node-element].classList.remove();
  let letters = document.querySelectorAll('.letter');
  for (i = 0; i < letters.length; i++) {
    letters[i].classList.remove('failed', 'success');
  }
  
}

function updateHangmanPicture() {
  // change the hangman picture source to the appropriate image (gameState.hangman)
  // the source of each image looks like this: 'images/hangman01.png'
  // of course the number changes, from 01 to 09
  hangManImage.src = "images/hangman0" + gameState.hangman + ".png"; 
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
  let solutionWord = gameState.word;
  if (gameState.lettersFound === solutionWord.length){
    gameState.won = true;
    winOrLoseContainer.innerHTML = "You win!";
  };

  if (gameState.hangman === 9){
    gameState.lost = true;
    winOrLoseContainer.innerHTML = "You lost!";
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
}

initGameState();

letterContainer.addEventListener('click', letterClicked);
winOrLoseContainer.addEventListener('click', initGameState);
