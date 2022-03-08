
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
// --> Codes To Add Username <--\\

user_name =  localStorage.getItem("KwitterUsername");
document.getElementById("YOUsirname").innerHTML = "Welcome " + user_name + "!!!";

//--> Codes to save roomname in localStorage and Firebase <--\\

function sddrsw(){
Room_name = document.getElementById("room_name").value;
localStorage.setItem("room_name", Room_name);


firebase.database().ref("/").child(Room_name).update({
      purpose: "di-dabadedabadi-dabade-dabadi"
}); 

window.location = "kwitter_page.html";




}
 //--> Codes to get the data from firebase <--\\
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function bup(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}



