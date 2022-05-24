// /*
// GAME FUNCTION:
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if loose
// - Let player choose to play again
// */

// let min =1, max =10, winningNum=2,guessesLeft =3;

// const game = document.querySelector('#game'),
//     minNum = document.querySelector('.min-num'),
//     maxNum = document.querySelector('.max-num'),
//     guessBtn = document.querySelector('#guess-btn'),
//     guessInput = document.querySelector('#guess-input'),
//     message = document.querySelector('.message');
//     message2 = document.querySelector('.message2');
// minNum.textContent = min;
// maxNum.textContent = max;

// guessBtn.addEventListener('click', function(){
//     let guess = parseInt(guessInput.value);

//     if(isNaN(guess) || guess > max || guess < min){
//         message2.textContent = `Please enter a number between ${min} and ${max}.`;
//         message2.style.color = 'red';
//     }
//     if(guess === winningNum ){
//         gameOver(true,`${guess} is correct. You WIN!`);
//     }else{
        
//         guessesLeft -= 1;
//         guessInput.style.borderColor = 'red';
//         guessInput.value = '';
//         if(guessesLeft === 0){
//             gameOver(false,`Game over, you lost, the correct number was ${winningNum}`);
//         }
//     }

// });


// function gameOver(won, msg) {
//     let color;
//     (won===true)? color = 'green' : color = 'red';

//     message.style.color = color;
//     message.textContent = msg;
//     guessInput.disabled = true;
//     guessInput.style.borderColor = color;

// }

// function setMessage(msg, color){
//     message.style.color = color;
//     message.textContent = msg;
//   }

// // iskool connect 1000rs ==> application for university



/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // PLay Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}