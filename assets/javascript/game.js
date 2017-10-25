//game with 4 cyrstals
//player will be shown a random number at the start of the game 
//each crystal will have a random number/value 
//when player click on a random crystal, it will add up the points for the player
//

var wins = 0;
var losses = 0;
var randomTargetScore  ;
var randomCrystalScore1  ;
var randomCrystalScore2 ;
var randomCrystalScore3 ;
var randomCrystalScore4 ;
var userScore = 0;
//var random = Math.floor(Math.random() * 12) + 1;

function display(){
	$('#randomScore').text('Random Score ' + randomTargetScore);
	$('#winsCount').text('Wins ' + wins);
	$('#lossesCount').text('Losses ' + losses);
	$('#userScoreCount').text('User Score ' + userScore);
}

function getRandomTargetScore (){
	randomTargetScore = Math.floor(Math.random()*101)+19;
	console.log("random target score is " + randomTargetScore);
}
	// getRandomTargetScore();
	
	

	//Crystal 1 Random Score 
function getRandomCrystalScore1 (){
	randomCrystalScore1 = Math.floor(Math.random()*12)+1;
	console.log("Random crystal score " + randomCrystalScore1);

}
	getRandomCrystalScore1();

	//Crystal 2 Random Score
function getRandomCrystalScore2 () {
	randomCrystalScore2 = Math.floor(Math.random() * 12) + 1;
	console.log("Random crystal score 2 is " + randomCrystalScore2)
}
	getRandomCrystalScore2();

	//Crystal 3 Random Score
function getRandomCrystalScore3 (){
	randomCyrstalScore3 = Math.floor(Math.random() * 12) +1;
	console.log("Random crystal score 3 is " + randomCyrstalScore3)
}
	getRandomCrystalScore3();

	//Crystal 4 Random Score
function getRandomCrystalScore4 (){
	randomCrystalScore4 = Math.floor(Math.random() *12) +1;
	console.log("Random crystal 4 score is " +randomCrystalScore4)
}
	getRandomCrystalScore4();

function gameReset (){
	userScore = 0;
	getRandomTargetScore () ;
	display();
}
	gameReset();

$('#crystalButton1').on('click' , function() {userScore = randomCrystalScore1 + userScore
	console.log("User score is " + userScore); 

	if ( userScore === randomTargetScore) {// This if else checks if the game ends
		wins++;
		gameReset();
		}
	else if (userScore > randomTargetScore){ 
		losses++;
		gameReset();
		}
		display();
	});

$('#crystalButton2').on('click' , function() {userScore = randomCrystalScore2 + userScore
	console.log("User score is from crystal 2 " + userScore);
	if ( userScore === randomTargetScore) {
		wins++;
		gameReset();
	}
	else if (userScore > randomTargetScore){ 
		losses++;
		gameReset();
	}
		display();
});

$('#crystalButton3').on('click' , function() {userScore = randomCyrstalScore3 + userScore
	console.log("User score is from crystal 3 " + userScore);
	if ( userScore === randomTargetScore) {
		wins++;
		gameReset();
	}
	else if (userScore > randomTargetScore){ 
		losses++;
		gameReset();
	}
		display();
});

$('#crystalButton4').on('click' , function(){ userScore = randomCrystalScore4 + userScore
	console.log("User score is from crystal 4 " +userScore);
	if ( userScore === randomTargetScore) {
		wins++;
		gameReset();
	}
	else if (userScore > randomTargetScore){ 
		losses++;
		gameReset();
	}
		display();
});


// if ( userScore === randomTargetScore) {
// 	wins++;
// 	gameReset();
// }
// else if (userScore > randomTargetScore){ 
// 	losses++;
// 	gameReset();
// }


