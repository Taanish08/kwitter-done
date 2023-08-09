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
      room_name = localStorage.getItem("roomname");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = " ";
}

function getData() {
       firebase.database().ref("/"+room_name).on('value', function(snapshot)
        { document.getElementById("output").innerHTML = "";
         snapshot.forEach(function(childSnapshot) 
         { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";

message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row= name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });
  });
 }
getData();

function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}