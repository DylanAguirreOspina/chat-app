function addUser(){
user_name = document.getElementById("user_name", user_name);

localStorage.setItem("user_name", user_name);

window.location = "kwitter_room.html"

}

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);

  window.location="kwitter_room.html";

}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgVhyNfvKW8yebbBQulrgfmgokzSzgYYo",
  authDomain: "social-website-f6e37.firebaseapp.com",
  databaseURL: "https://social-website-f6e37-default-rtdb.firebaseio.com",
  projectId: "social-website-f6e37",
  storageBucket: "social-website-f6e37.appspot.com",
  messagingSenderId: "585393434550",
  appId: "1:585393434550:web:06839bcaf0af2e4ff25b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome"+ user_name + "!";

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();




function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location ="kwitter_room.html";

}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "kwitter.html";
}



function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding user"
});

}

function send(){

  
}