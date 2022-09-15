 function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}

const firebaseConfig = {
    apiKey: "AIzaSyC9HgGltxZi_xVY7T94Qhn8rs5uDRyCPbg",
    authDomain: "chat-app-b2779.firebaseapp.com",
    databaseURL: "https://chat-app-b2779-default-rtdb.firebaseio.com",
    projectId: "chat-app-b2779",
    storageBucket: "chat-app-b2779.appspot.com",
    messagingSenderId: "366293863187",
    appId: "1:366293863187:web:33619b68eabae40d7628e6",
    measurementId: "G-17BVE5928H"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name,
 message:msg,
 like:0   
});

document.getElementById("msg").value="";
  }