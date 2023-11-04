const playername = document.getElementById("playername");
const age = document.getElementById("playerage");
const playBtn = document.getElementById("play-button")

playBtn.onclick = () =>{
  if(playername.value == '' || username.age == null){
    alert("Please fill in all fields")
  }else{
    var name = document.getElementById("playername").value
    var age = document.getElementById("playerage").value
    if (localStorage.getItem('playername') == null) {
      localStorage.setItem('playername','[]');
    }
    if (localStorage.getItem('usernames') == null) {
      localStorage.getItem('username' , '[]')
  }
  var old_name = JSON.parse(localStorage.getItem('playername'));
  var old_age = JSON.parse(localStorage.getItem('age'));
  old_name.push(playername);
  old_age.push(age);
  localStorage.setItem('playername', JSON.stringify(old_name));
  localStorage.setItem('age', JSON.stringify(old_age));

  // location.href = "./index.html"
} 
}

playBtn.onclick = () => {
  window.location.href = "./index.html"
}