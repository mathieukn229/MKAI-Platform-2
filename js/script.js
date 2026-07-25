/* ==========================
   MKAI V2 - SCRIPT OPENAI
========================== */


const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");



// Ajouter message

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


    const message = input.value.trim();


    if(message === ""){

        return;

    }



    addMessage(message,"user");


    input.value = "";



    const loading = document.createElement("div");


    loading.classList.add("message");
    loading.classList.add("bot");


    loading.innerText = "MKAI réfléchit... 🤔";


    chatBox.appendChild(loading);



    try{


        const response = await fetch("/api/chat",{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },


            body:JSON.stringify({

                message:message

            })

        });



        const data = await response.json();



        loading.remove();



        if(data.reply){

            addMessage(data.reply,"bot");

        }else{

            addMessage(
                "Désolé, je n'ai pas reçu de réponse.",
                "bot"
            );

        }



    }catch(error){


        loading.remove();


        addMessage(
            "Erreur de connexion avec MKAI. Vérifie ton serveur.",
            "bot"
        );


    }


}





// Bouton envoyer

sendBtn.addEventListener(
    "click",
    sendMessage
);




// Touche Entrée

input.addEventListener(
    "keypress",
    function(e){

        if(e.key === "Enter"){

            sendMessage();

        }

    }
);






// Bouton principal

const mainBtn = document.querySelector(".main-btn");


if(mainBtn){

    mainBtn.addEventListener(
        "click",
        ()=>{

            input.focus();

        }
    );

}






// Actions outils IA

const tools = document.querySelectorAll(".tool-card");


tools.forEach(tool=>{


    tool.addEventListener(
        "click",
        ()=>{


            const title = tool.querySelector("h4").innerText;


            input.value =
            "Aide-moi avec : " + title;


            input.focus();


        }
    );


});
