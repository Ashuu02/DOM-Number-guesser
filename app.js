let min =1, max =10, winningNum=2,guessesLeft =3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess > max || guess < min){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }
    if(guess === winningNum ){
        gameOver(true,`${guess} is correct. You WIN!`);
    }else{
        
        guessesLeft -= 1;
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        if(guessesLeft === 0){
            gameOver(false,`Game over, you Lost, The correct number was ${winningNum}`);
        }
    }

});


function gameOver(won, msg) {
    let color;
    (won===true)? color = 'green' : color = 'red';
    message.style.color = color;
    message.textContent = msg;
    guessInput.disabled = true;
    guessInput.style.borderColor = color;

}







// iskool connect 1000rs