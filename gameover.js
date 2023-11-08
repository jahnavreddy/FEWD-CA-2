var  scoreUpdate = document.getElementById("score-board")
console.log(localStorage.getItem("score"));
console.log(scoreUpdate);
var score = localStorage.getItem("score") ;
var phraseText = document.getElementById("phrase")
scoreUpdate.innerText = localStorage.getItem("score");

if (score>0 && score < 10){
  phraseText.innerHTML = "GOOD JOB"
}
else if(score>9 && score < 20){
  phraseText.innerHTML = "EXCELLENT"
}
else if(score>19 && score < 30){
  phraseText.innerHTML = "GREAT"
}
else if (score>29){
  phraseText.innerHTML = "MASTERY"
}

