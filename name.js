const playerName = document.getElementById("playername");
const ageValue = document.getElementById("playerage");
const playBtn = document.getElementById("play-button")

playBtn.onclick = () =>{
  if(playerName.value == '' || ageValue.value == ''){
    alert("Please fill in all fields")
  }else{
    playBtn.onclick = () => {
     window.location.href = "./index.html"
    }
    var name = document.getElementById("playername").value
    var age = document.getElementById("playerage").value
  //   if (localStorage.getItem('playername') == null) {
  //     localStorage.setItem('playername','[]');
  //   }
  //   if (localStorage.getItem('usernames') == null) {
  //     localStorage.getItem('username' , '[]')
  // }
  // var old_name = JSON.parse(localStorage.getItem('playername'));
  // var old_age = JSON.parse(localStorage.getItem('age'));
  // old_name.push(playerName);
  // old_age.push(ageValue);
  // localStorage.setItem('playername', JSON.stringify(old_name));
  // localStorage.setItem('age', JSON.stringify(old_age));

  // location.href = "./index.html"


} 
}

