/* ==========================
   MKAI V2 - SCRIPT GEMINI
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





// Envoyer message à MKAI

async function sendMessage(){


    const userMessage = input.value.trim();


    if(userMessage === ""){
        return;
    }



    // Message utilisateur

    addMessage(userMessage, "user");


    input.value = "";



    // Animation réflexion

    const loading = document.createElement("div");

    loading.classList.add("message");
    loading.classList.add("bot");

    loading.innerText = "MKAI réfléchit... 🤔";

    chatBox.appendChild(loading);



    try{


        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },


            body: JSON.stringify({

                message: userMessage

            })

        });



        const data = await response.json();



        loading.remove();



        // Réponse IA

        if(data.reply){


            addMessage(
                data.reply,
                "bot"
            );


        }else{


            addMessage(
                "Erreur MKAI : " + 
                (data.error || "Aucune réponse reçue"),
                "bot"
            );


        }



    }catch(error){


        loading.remove();


        addMessage(
            "Erreur de connexion : " + error.message,
            "bot"
        );


    }


}





// Bouton envoyer

if(sendBtn){

    sendBtn.addEventListener(
        "click",
        sendMessage
    );

}





// Envoyer avec Entrée

if(input){

    input.addEventListener(
        "keypress",
        function(e){


            if(e.key === "Enter"){

                sendMessage();

            }


        }
    );

}






// Bouton principal de la page

const mainBtn = document.querySelector(".main-btn");


if(mainBtn){

    mainBtn.addEventListener(
        "click",
        function(){

            input.focus();

        }
    );

}






// Cartes outils IA

const tools = document.querySelectorAll(".tool-card");


tools.forEach(tool=>{


    tool.addEventListener(
        "click",
        function(){


            const title = tool.querySelector("h4").innerText;


            input.value =
            "Aide-moi avec : " + title;


            input.focus();


        }
    );


});
