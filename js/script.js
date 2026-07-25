/* ==========================
   MKAI V2 - SCRIPT COMPLET
========================== */


const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");




// Ajouter un message dans le chat

function addMessage(text, type){

    const message = document.createElement("div");

    message.classList.add("message");
    message.classList.add(type);

    message.innerText = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;

}





// Réponses simples MKAI

function getMKAIResponse(message){

    let text = message.toLowerCase();


    if(text.includes("bonjour") || text.includes("salut")){

        return "Bonjour 👋 Je suis MKAI. Je peux t'aider avec le business, la création de contenu, l'IA et tes projets.";

    }


    if(text.includes("business")){

        return "🚀 Pour développer un business, commence par identifier un problème, créer une solution simple et utiliser l'IA pour gagner du temps.";

    }


    if(text.includes("contenu")){

        return "✍️ Je peux t'aider à créer des publications Facebook, TikTok, scripts vidéos et idées de contenu.";

    }


    if(text.includes("ia") || text.includes("intelligence artificielle")){

        return "🤖 L'IA peut t'aider à créer des images, écrire, analyser un projet et automatiser certaines tâches.";

    }


    if(text.includes("code") || text.includes("site")){

        return "💻 Je peux t'accompagner pour créer des sites web, corriger du code et développer tes projets.";

    }


    return "Je réfléchis... 🤔 Ta demande est intéressante. Donne-moi plus de détails pour mieux t'aider.";

}






// Envoyer message

function sendMessage(){

    const message = input.value.trim();


    if(message === ""){

        return;

    }



    addMessage(message,"user");


    input.value="";



    // effet réflexion

    const loading = document.createElement("div");

    loading.classList.add("message");
    loading.classList.add("bot");

    loading.innerText="MKAI réfléchit... 🤔";

    chatBox.appendChild(loading);



    setTimeout(()=>{


        loading.remove();


        const response = getMKAIResponse(message);


        addMessage(response,"bot");



    },1500);



}




sendBtn.addEventListener("click",sendMessage);



input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});







// Bouton principal

const mainBtn = document.querySelector(".main-btn");


mainBtn.addEventListener("click",()=>{

    input.focus();

});







// Actions des outils IA


const tools = document.querySelectorAll(".tool-card");


tools.forEach(tool=>{


    tool.addEventListener("click",()=>{


        const title = tool.querySelector("h4").innerText;


        input.value = "Aide-moi avec : " + title;


        input.focus();


    });


});
