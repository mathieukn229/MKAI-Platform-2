// Splash Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

const splash=document.getElementById("splash-screen");

if(splash){

splash.style.display="none";

}

},2500);

});// ===========================
// MKAI PLATFORM V2
// Navigation + interactions
// ===========================


// Récupération des pages

const pages = document.querySelectorAll(".page");


// Boutons navigation

const navButtons = document.querySelectorAll(".bottom-nav button");


// Fonction pour afficher une page

function showPage(index){

    pages.forEach(page => {
        page.style.display = "none";
    });


    if(pages[index]){

        pages[index].style.display = "block";

    }

}



// Navigation du bas

navButtons.forEach((button,index)=>{


    button.addEventListener("click",()=>{

        showPage(index);

    });


});




// Bouton commencer conversation

const startButton = document.querySelector(".primary-btn");


if(startButton){

    startButton.addEventListener("click",()=>{

        showPage(1);

    });

}





// Cartes outils IA

const toolCards = document.querySelectorAll(".tool-card");


toolCards.forEach(card=>{


    card.addEventListener("click",()=>{


        const title = card.querySelector("h4").innerText;


        if(title.includes("Images")){

            showPage(2);

        }


        else if(title.includes("Academy")){

            showPage(3);

        }


        else if(title.includes("Business")){

            showPage(1);

        }


        else{

            showPage(1);

        }



    });



});





// ===========================
// CHAT MKAI
// ===========================


const sendBtn = document.getElementById("sendBtn");

const messageInput = document.getElementById("messageInput");

const chatMessages = document.querySelector(".chat-messages");



if(sendBtn){


sendBtn.addEventListener("click", sendMessage);


messageInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});


}




function sendMessage(){


    const text = messageInput.value.trim();


    if(text==="") return;



    // Message utilisateur

    const user = document.createElement("div");

    user.className="message user";

    user.innerText=text;


    chatMessages.appendChild(user);



    messageInput.value="";



    // Réflexion MKAI

    const bot = document.createElement("div");

    bot.className="message mkai";

    bot.innerText="MKAI réfléchit... 🤖";


    chatMessages.appendChild(bot);



    setTimeout(()=>{


        bot.innerText = getResponse(text);


    },1200);



}





function getResponse(message){


    message = message.toLowerCase();



    if(message.includes("bonjour")){

        return "Bonjour Mathieu 👋 Je suis MKAI, ton assistant IA.";

    }



    if(message.includes("business")){

        return "Je peux t'aider à trouver une idée de business adaptée à ton profil.";

    }



    if(message.includes("contenu")){

        return "Je peux créer des scripts, publications et stratégies marketing.";

    }



    return "Je suis en évolution 🚀 Bientôt connecté à une intelligence artificielle avancée.";

} 
