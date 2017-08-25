	//creates an array that list possible computer hangman words
	var computerChoice = ["touchdown", "leather", "quarterback", "field"];

	//creates variable to store wins
	var wins = 0; 

	//creates variable to store number of guesses left
	var guessesLeft = 20; 

	//creates variable to store letters guesses so far
	var guessesSoFar = "";

	//computer randomly chooses a choice from computerChoice array as the word
	var hangmanWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];

	//loop that creates a new variable that creates the underscore mystery word 
		var mysteryWord = new Array();
		for (i = 0; i <hangmanWord.length; i++){
			mysteryWord[i] = "_";
		}


	//function is run whenever the user presses a key
	document.onkeyup = function(event){

		//determines which key was pressed
		var userGuess = event.key;

		
		

		

		//if all letters of the hangman word is displayed 
			//then user is alerted they won and wins goes up and guesses left resets and guesses so far resets 
		//else
			//if number of guesses left = 0
			if (guessesLeft == 0){
				//then user is alert they lost and game is reset
				alert("You Lost");
				guessesLeft = 20; 
				guessesSoFar = "";
			}else{
				//user's guess is a letter is not in the word
				if (hangmanWord.indexOf(userGuess) < 0 ){
					//then letter in the hangman word displays and number of  guesses decreases
					guessesLeft--;
					guessesSoFar = guessesSoFar + "" + userGuess;
				}else{
					var temp = new Array();
					var j = 0; 
					//find all the indices of the letter 
					for (i = 0; i < hangmanWord.length; i++) { 
   						 if (userGuess == hangmanWord[i]){
   						 	temp[j]=i;
   						 	j++;
    					}
					}
					for (x = 0; x < temp.length; x++){
						mysteryWord[temp[x]]=userGuess;
					}
					if ( mysteryWord.indexOf("_") < 0){
						alert("You Win");
						guessesLeft = 20; 
						guessesSoFar = ""; 
						wins++; 
					}
				}									
		}

var mysteryhtml = 
	"<p>" + mysteryWord + "</p>";
	document.querySelector("#mysteryword").innerHTML = mysteryhtml;

var guessesLefthtml = 
	"<p>" + guessesLeft + "</p>";
	document.querySelector("#guessesLeft").innerHTML = guessesLefthtml;

var lettersguesseshtml = 
	"<p>" + guessesSoFar + "</p>";
	document.querySelector("#lettersGuessed").innerHTML = lettersguesseshtml;

var winshtml = 
	"<p>" + wins + "</p>";
	document.querySelector("#wins").innerHTML = winshtml;
	}

