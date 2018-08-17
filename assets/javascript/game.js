//-------------Global Variables----------------
let villains = ["gyro man", "stone man", "star", "crystal", "napalm"];
let choseWord = "";
let lettersInWord = "";
let correctLetters = [];
let wrongLetters = [];
let numBlanks = 0;
let wins = 0;
let lose = 0;
let remains = 8;
let rightCounter = 0;


 //---------Resets letters-------
function reset(){
    //Randomly choose word
    chosenWord = villains[Math.floor(Math.random() * villains.length)];
    lettersInWord = villain.split('');
    numBlanks = lettersInWord.length;

        rightCounter = 0;
        remains = 9;
        wrongLetters = [];
        correctLetters = [];
        // resets so you can choose these letters again
        dubLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z'];
                
        
        test=false; //resets all the blank spaces
        startGame(); //resets words after all letters are correct

    console.log(chosenWord);
}

//--------------Game starts--------------
function startGame () {
    //choosing random words from 
    chosenWord = villains[Math.floor(Math.random() * villains.length)];
    lettersInWord = chosenWord.split('');
    numBlanks = lettersInWord.length;

        rightCounter = 0;
        remains = 9;
        wrongLetters = [];
        correctLetters = [];
        // resets so you can choose these letters again
        dubLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
        for(let i = 0; i < numBlanks; i++)
	{
		correctLetters.push('_');
        document.querySelector('.underscore').innerHTML = correctLetters;
	}
        document.querySelector('.underscore').innerHTML = correctLetters.join(' ');
        document.querySelector('.numGuesses').innerHTML = remains;
        document.querySelector('.numGuesses').innerHTML = wins;
        document.querySelector('.loseCounter').innerHTML = lose;
        document.querySelector('.wrongGuess').innerHTML = wrongLetters;
}

function alreadyGuessed (userKey){
    if (choseWord.indexOf(userKey) > - 1){
        for( let i = 0; i < numBlanks; i++){
            if(lettersInWord[i] === userKey){
                rightCounter++;
                correctLetters[i] = userKey;
                document.querySelector('.underscore').innerHTML = correctLetters.join(' ');
            }
        }
    }
    else{
        wrongLetters.push(userKey);
        remains--;
        document.querySelector('.numGuesses').innerHTML = remains;
        document.querySelector('.wrongGuess').innerHTML = wrongLetters;
    }
}

function winLose(){
    if(rightCounter === numBlanks){
        wins++;
        document.querySelector('winCounter').innerHTML = wins;
        alert('grats');
        reset();
    }
    else if(remains === 0){
        lose++;
        document.querySelector('.loseCounter').innerHTML = lose;
    }
}

//----------Start Game clicks----------
startGame();

document.onkeyup = function(event)
{
	test = true;
	 let letterGuessed = event.key;
	for(let i = 0; i < dubLetter.length; i++)
	{	
		if(letterGuessed === dubLetter[i] && test === true)
		{
			let spliceDword = dubLetter.splice(i,1);

			alreadyGuessed(letterGuessed);
			winLose();
		}
	}		
		
}
