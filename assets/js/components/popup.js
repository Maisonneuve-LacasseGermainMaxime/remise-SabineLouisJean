//Elements HTML
const modale = document.querySelector(".popup");
const bouton = document.querySelector(".material-symbols-outlined");


//Functions
export default function init() {
    window.addEventListener("load", function() {
        setTimeout(function() {
            afficherModale(); 
        }, 5000);
    });
    bouton.addEventListener("click", cacherModale);
}

// Pour cacher popup
    function cacherModale() {
        modale.classList.add("invisible");
    }

// Pour afficher modale en enregister dans stockage
    function afficherModale() {
        modale.classList.remove("invisible");
    
        let utilisateur = {
            nom: "Patate",
            age: undefined,  
        };
    
        let chaineUtilisateur = JSON.stringify(utilisateur);
        console.log(chaineUtilisateur);
    
        localStorage.setItem("utilisateur", chaineUtilisateur);
        localStorage.setItem("modale-ouverte", "true");
    }

    //init();