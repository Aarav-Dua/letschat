// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCX-5fYoYIws7qcNy6MA71DFX69BBD69WY",
      authDomain: "twitterorkwitter.firebaseapp.com",
      databaseURL: "https://twitterorkwitter-default-rtdb.firebaseio.com",
      projectId: "twitterorkwitter",
      storageBucket: "twitterorkwitter.appspot.com",
      messagingSenderId: "9461029226",
      appId: "1:9461029226:web:f00e028bc7cb1f96ef6d13"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data); 
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-info' value="+ like +"id="+ firebase_message_id +" onclick='updateLike(this.id)>";

span_tag = "<span class='glyphicon glyphicon-thumbs-up'>" + like + "</span> </button>"; 
row = name_with_tag + message_with_tag + like_button + span_tag;

document.getElementById("output").innerHTML += row; 


//End code 
      } });  }); }
getData();

function bup2(){
      window.location = "index.html";
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name"); 

function sendidoodle(){
      msg = document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML="";

}

function updateLike(message_id)

      console.log("clicked on like button: " + message_id);
      button_id = message_id;
      likes = doucment.getElementById(button_id).value;

