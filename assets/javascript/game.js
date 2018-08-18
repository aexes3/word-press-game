//-------------Global Variables----------------
//Array of words
let villains = ["gyro man", "stone man", "star", "crystal", "napalm"];
//This will be the display word
let choseWord = "";
//these are the letters to guess on the display
let lettersInWord = "";
//holding the letters in the word on display
let correctLetters = [];
//letters guessed against display word
let wrongLetters = [];
//number of blanks in each word
let numBlanks = 0;
let numSpace = 0;
let wins = 0;
let lose = 0;
let remains = 6;
let rightCounter = 0;


 //---------Resets letters-------
function reset(){
    //Randomly choose word
    choseWord = villains[Math.floor(Math.random() * villains.length)];
    lettersInWord = choseWord.split('');
    //gets the number of blanks
    numBlanks = lettersInWord.length;

        rightCounter = 0;
        remains = 6;
        wrongLetters = [];
        correctLetters = [];
        // resets so you can choose these letters again
        dubLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z'];
                
        
        test=false; //resets all the blank spaces
        startGame(); //resets words after all letters are correct

    console.log(choseWord);
}

//--------------Game starts--------------
function startGame () {
    //choosing random words from 
    choseWord = villains[Math.floor(Math.random() * villains.length)];
    //splits the letters into individual letters
    lettersInWord = choseWord.split('');
    numBlanks = lettersInWord.length;

        rightCounter = 0;
        remains = 6;
        wrongLetters = [];
        correctLetters = [];
        // resets so you can choose these letters again
        dubLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
        for(let i = 0; i < numBlanks; i++)
	{
		correctLetters.push('_'); //Shows how many blank letters are on dispaly
        document.querySelector('.underscore').innerHTML = correctLetters;
	}
        document.querySelector('.underscore').innerHTML = correctLetters.join(' ');
        document.querySelector('.numGuesses').innerHTML = remains;
        document.querySelector('.winCounter').innerHTML = wins;
        document.querySelector('.loseCounter').innerHTML = lose;
        document.querySelector('.wrongGuess').innerHTML = wrongLetters;
}

function alreadyGuessed (userKey){
    //if user key exists in choseWord then perform the below
    if (choseWord.indexOf(userKey) > - 1){
        //loops depending on the number of blanks
        for( let i = 0; i < numBlanks; i++){
            if(lettersInWord[i] === userKey){
                rightCounter++;
                correctLetters[i] = userKey;
                document.querySelector('.underscore').innerHTML = correctLetters.join(' ');
            }
        }
    }
    //logs the wrong keys
    else{
        wrongLetters.push(userKey);
        remains--;
        document.querySelector('.numGuesses').innerHTML = remains;
        document.querySelector('.wrongGuess').innerHTML = wrongLetters;
    }
}
//when the blans are filled with correct letters start this
function winLose(){
    if(rightCounter === numBlanks){
        wins++;
        document.querySelector('.winCounter').innerHTML = wins;
        alert('You have NOT been defeated');
        reset();
    }
    //if all letters have not been filled in before guess limit, Start this
    else if(remains === 0){
        lose++;
        document.querySelector('.loseCounter').innerHTML = lose;
        alert('You have been defeated');
        reset();
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