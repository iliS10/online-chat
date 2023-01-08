  // Initialiser Firebase
var config = {
    apiKey: "AIzaSyDIidvjlPjkrptN05bq6T06Us6IKoWqqbM",
    authDomain: "chat-oeoeoe.firebaseapp.com",
    databaseURL: "https://chat-oeoeoe-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "chat-oeoeoe",
    storageBucket: "chat-oeoeoe.appspot.com",
    messagingSenderId: "788584561074",
    appId: "1:788584561074:web:6dc3f7275a26b7b82a4cab",
    measurementId: "G-JPFJXMPQS1"
    
  };
  firebase.initializeApp(config);
  
  // Référencer la base de données
  var database = firebase.database();
  
  // Référencer répertoire de messages
  var messagesRef = database.ref('messages');
  
  // Écouter les changements dans la base de données et mettre à jour la chatbox en conséquence
  messagesRef.on('child_added', function(snapshot) {
  // Récupérer le message
    var message = snapshot.val();
  // Ajouter le message à la chatbox
    document.getElementById('chatbox').innerHTML += '<p>' + message.username + ': ' + message.message + '</p>';
  });
  
   // Ajouter un événement submit sur le formulaire
  document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
   // Récupérer les données du formulaire
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
  // Envoyer le message à la base de données
    messagesRef.push({
      username: username,
      message: message
    });
   // Réinitialiser le formulaire
    this.reset();
  });
  