var  scoreUpdate = document.getElementById("score-board")
console.log(localStorage.getItem("score"));
console.log(scoreUpdate);
scoreUpdate.innerText = localStorage.getItem("score");
