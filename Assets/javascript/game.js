var randomNumber = Math.floor(Math.random() *101 + 19);
	$("#Number").text(randomNumber);

	var red = Math.floor(Math.random() *11 + 1);
	var blue = Math.floor(Math.random() *11 + 1);
	var green = Math.floor(Math.random() *11 + 1);
	var yellow = Math.floor(Math.random() *11 + 1);

	var wins = 0;
	var losses = 0; 

	var yourScore = 0;


$( document ).ready(function() {

function reset (){
	var randomNumber = Math.floor(Math.random() *101 + 19);
	$("#Number").text(randomNumber);

	var red = Math.floor(Math.random() *11 + 1);
	var blue = Math.floor(Math.random() *11 + 1);
	var green = Math.floor(Math.random() *11 + 1);
	var yellow = Math.floor(Math.random() *11 + 1);

	var yourScore = 0;
	
}

$("#red").click(function(){
	yourScore += red;
	console.log(yourScore);
	$("#totalScore").text(yourScore); 
	checkScore();
});	

$("#blue").click(function(){
	yourScore = yourScore + blue;
	console.log(yourScore);
	$("#totalScore").text(yourScore);
	checkScore();
});	

$("#green").click(function(){
	yourScore = yourScore + green;
	console.log(yourScore);
	$("#totalScore").text(yourScore);
	checkScore();

});	

$("#yellow").click(function(){
	yourScore = yourScore + yellow;
	$("#totalScore").text(yourScore);
	console.log(yourScore);
	checkScore();
});	

	

function winner() {
	alert("You Win!"); 
	wins++;
	$("#wins").text(wins);
	reset();	
}

function loser() {
	alert("You Lose!"); 
	losses++;
	$("#losses").text(losses);	
	reset();	
}



function checkScore (){
	if (yourScore === randomNumber) {
	winner();
	}
	else if (yourScore > randomNumber) {
	loser();
	}
}

})


