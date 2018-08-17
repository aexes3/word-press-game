

// //Array of Villains
// let word = ["gravity", "wave", "stone", "gyro", "star", "napalm", "crystal"];
//  //Choose random Villains
// let randNum = Math.floor(Math.random() * word.length);
// let rightWord = [];
// let wrongWord = [];
// let choosenWord = word[randNum];
// let underScore = [];


// let docUnderScore = document.querySelector('underscore');
// let docRightGuess = document.querySelector('rightGuess');
// let docWrongGuess = document.querySelector('wrongGuess');



// //underscorses become length of word
// let generateUnderscore = () => {
//     for(let i = 0; i < choosenWord; i++){
//         underScore.push("_");        
//     }
//     return underScore;
// }

// //get user guess
// document.addEventListener('keypress', (event) => {
//     let keyword = String.fromCharCode(event.keyCode);
//     //if users guess is right
//     if(choosenWord.indexOf(keyword) > -1) {
//         //add to right words array
//         rightWord.push(keyword);
//         //replace underscore with right letter
//         underScore[choosenWord.indexOf(keyword)] = keyword;
//         docUnderScore[0].innerHTML = underScore.join(' ');
//         docRightGuess[0].innerHTML = RightWord;
//         //check to see if user word matches guesses
//         if(underScore.join('') == choosenWord){
//             alert("GRATS");
//         }
//     }
//     else{
//         wrongWord.push(keyword);
//         docWrongGuess[0].innerHTML = wrongWord;
//         }
//     });

//   docUnderScore[0].innerHTML = generateUnderscore().join(' ');


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

// villian = "";

// for(i = 0; i < villain.length; i++){
//     if(!lettersInWord.includes(villian.charAt(i))){
//         if(dubLetter.includes(villian.charAt(i))){
//             lettersInWord += villian.charAt(i);
//         }
//     }
// }


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
            }
        }
    }
}



//----------Start Game clicks----------
startGame();

document.onkeyup = function(event)
{
	// test = true;
	 var letterGuessed = event.key;
	for(var i = 0; i < dubLetter.length; i++)
	{	
		if(letterGuessed === dubLetter[i] && test === true)
		{
			var spliceDword = dubLetter.splice(i,1);
			//Test / Debug
			console.log('Double word is = ' + dubLetter[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}
