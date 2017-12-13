
		
	var randomNumber = Math.floor(Math.random() *101 + 19);
	$("#Number").text(randomNumber);

	var red = Math.floor(Math.random() *11 + 1);
	var blue = Math.floor(Math.random() *11 + 1);
	var green = Math.floor(Math.random() *11 + 1);
	var yellow = Math.floor(Math.random() *11 + 1);

	var wins = 0
	var losses = 0 

	var yourScore = 0
	

	
		$("#red").click(function(){
			yourScore = yourScore + red;
			console.log(yourScore);
			$("#totalScore").text(yourScore)
		});	

		$("#blue").click(function(){
			yourScore = yourScore + blue;
			console.log(yourScore);
			$("#totalScore").text(yourScore)
		});	

		$("#green").click(function(){
			yourScore = yourScore + green;
			console.log(yourScore);
			$("#totalScore").text(yourScore)
		});	

		$("#yellow").click(function(){
			yourScore = yourScore + yellow;
			$("#totalScore").text(yourScore)
			console.log(yourScore);
		});	

	

	function winner() {
		alert("You Win!"); 
		wins++;
		$("#wins").text(wins)	

	}

	function loser() {
		alert("You Lose!"); 
		losses++;
		$("#losses").text(losses)		
	}


	if (totalScore === randomNumber) {
		winner();
	}

	else if (totalScore > randomNumber) {
		loser();
	}

// needed: reset function and to figure out why if/else if statements aren't calling the functions
