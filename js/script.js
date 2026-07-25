// MKAI PLATFORM V2
// Fonction Chat


const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.querySelector(".chat-messages");


// Envoyer un message

sendBtn.addEventListener("click", sendMessage);


messageInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});



function sendMessage(){

    const message = messageInput.value.trim();


    if(message === ""){
        return;
    }



    // Message utilisateur

    const userMessage = document.createElement("div");

    userMessage.className = "message user";

    userMessage.innerText = message;


    chatMessages.appendChild(userMessage);



    messageInput.value = "";



    // Animation MKAI réfléchit

    const thinking = document.createElement("div");

    thinking.className = "message mkai";

    thinking.innerText = "MKAI réfléchit... 🤖";


    chatMessages.appendChild(thinking);



    chatMessages.scrollTop = chatMessages.scrollHeight;



    // Réponse temporaire

    setTimeout(()=>{


        thinking.innerText = getMKAIResponse(message);


    },1500);



}




// Réponses de test

function getMKAIResponse(message){


    message = message.toLowerCase();



    if(message.includes("bonjour")){

        return "Bonjour Mathieu 👋 Je suis MKAI, prêt à t'aider.";

    }


    if(message.includes("business")){

        return "Je peux t'aider à trouver une idée de business adaptée à ton profil.";

    }


    if(message.includes("contenu")){

        return "Je peux créer des idées de posts, scripts et stratégies marketing.";

    }



    return "Je suis encore en apprentissage, mais bientôt je serai connecté à une vraie intelligence artificielle.";

}
