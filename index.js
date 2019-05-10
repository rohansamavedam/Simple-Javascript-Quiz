function submitAnswers(){
	var total = 5;
	var score = 0;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	if(q1 == null || q1 == '' || q2 == null || q2 == '' || q3 == null || q3 == '' || q4 == null || q4 == '' || q5 == null || q5 == ''){
		alert("Please fill in all the questions");
		return false;
	}

	var answers = ["a", "a", "c", "a", "a"];

	if(q1 == answers[0]){
		score++;
	}
	if(q2 == answers[1]){
		score++;
	}
	if(q3 == answers[2]){
		score++;
	}
	if(q4 == answers[3]){
		score++;
	}
	if(q5 == answers[4]){
		score++;
	}

	document.getElementById('results').innerHTML = "<h1>Your score is </h1>" +  score;
	alert("your score out of 5 is " +score);

	return false;

}