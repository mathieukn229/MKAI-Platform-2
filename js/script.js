// MKAI Platform V2

// Bouton commencer conversation
const startButton = document.querySelector(".primary-btn");

if(startButton){
    startButton.addEventListener("click", () => {
        alert("Bienvenue dans MKAI 💙");
    });
}


// Animation des cartes outils

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h4").innerText;

        alert("Ouverture de : " + title);

    });

});
