
var firebaseConfig = {
      apiKey: "AIzaSyAyABeYbTRe1VmAFw6_A0ukujeRwe0SVeg",
      authDomain: "kwitter-cd5e8.firebaseapp.com",
      databaseURL: "https://kwitter-cd5e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-cd5e8",
      storageBucket: "kwitter-cd5e8.appspot.com",
      messagingSenderId: "1008215953664",
      appId: "1:1008215953664:web:e80971b0f7fe393fc7a3e5"
    };
    

      firebase.initializeApp(firebaseConfig);
       

      username = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML= "Welcome " + username;

function add_room() {
roomname = document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", roomname);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="kwitter_page.html";

}
function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}