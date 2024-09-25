// Variables Globales //

const listeCupcake = [
    {  
        id: 1,
        titre :"Bananes en folie",
        description : "Cupcake aux bananes fait avec amour par des singes.",
        prix : 11.99,
        lienImage :"assets/img/cupcakes/cupcake-1-banana.png",
        alt: "Cupcake aux bananes.",
    },
    { 
        id: 2,
        titre : "Choco-Noisette" ,
        description : "Cupcake au chocolat et noisettes.",
        prix :13.99,
        lienImage : "assets/img/cupcakes/cupcake-2-hazelnut.png",
        alt : "Cupcake aux noisettes.",
    },
    {   
        id: 3,
        titre :"Red Velvet",
        description : "Cupcake ultra-moelleux avec un glaçage au fromage à la crème.",
        prix :14.99 ,
        lienImage : "assets/img/cupcakes/cupcake-3-redVelvet.png",
        alt: "Cupcake red velvet.",
    },
    {   
        id: 4,
        titre : "Choco-Menthe" ,
        description : "Cupcake onctueux au chocolat avec un soupçon de menthe." ,
        prix : 10.99,
        lienImage :"assets/img/cupcakes/cupcake-4-mintChocolate.png" ,
        alt: "Cupcake au chocolat et menthe.",
    },
    {   
        id: 5,
        titre :"Forêt-Noire",
        description :"Cupcake classique au chocolat et cerises.",
        prix :15.99 ,
        lienImage : "assets/img/cupcakes/cupcake-5-blackForest.png" ,
        alt : "Cupcake Forêt-Noire.",
    },
    {   
        id: 6,
        titre :"Surprise!" ,
        description : "Cupcake à la vanille et paillettes arc-en-ciel" ,
        prix :12.99,
        lienImage : "assets/img/cupcakes/cupcake-6-birthday.png" ,
        alt: "Cupcake d'anniversaire couverte de pailletes.",
    },

];

// Variables HTML //

const conteneurListe = document.querySelector(".produit-liste");

const produitVedette = document.querySelector(".produit-vedette");
const produitImage = document.querySelector(".produit-vedette-image");
const produitTitre = document.querySelector(".produit-vedette-titre");
const produittexte = document.querySelector(".produit-vedette-texte");
const produitPrix = document.querySelector(".produit-vedette-prix");

const triAlphabetiqueCroissant = document.querySelector(".filtre-ordre-alphabetique");
const triAlphabetiqueDecroissant = document.querySelector(".filtre-ordre-alphabetique-decroissant");
const triPrixCroissant = document.querySelector(".filtre-prix-croissant");


// Fonctions //

function init() {
    afficherListe(listeCupcake);


    
 const produitAleatoire = Math.floor(Math.random() * listeCupcake.length);
 afficherDetails(listeCupcake[produitAleatoire]);
  }


  function afficherListe(listeProduit) {
    conteneurListe.innerHTML = "";

    listeProduit.forEach(function (produit) {
        let itemListe = `
        <div class="produit-liste-item" id=${produit.id}>
            <img class="produit-liste-img" src="${produit.lienImage}" alt="${produit.alt}" />
            <h2 class="produit-liste-titre">${produit.titre}</h2>
            <p class="produit-liste-text">${produit.description}</p>
            <p class="produit-liste-prix">${produit.prix} $</p>
        </div>`;

        conteneurListe.insertAdjacentHTML("beforeend", itemListe);
        const elementAjoute = conteneurListe.lastElementChild;
        elementAjoute.addEventListener("click", onClicElementListe);
    });
}

// Fonction qui affiche les détails d'un produit
function afficherDetails(produit) {
    produitImage.src = produit.lienImage;
    produitImage.alt = produit.alt;
    produitTitre.textContent = produit.titre;
    produittexte.textContent = produit.description;
    produitPrix.textContent = `${produit.prix} $`;
}


function onClicElementListe(evenement) {
    const declencheur = evenement.currentTarget;
    const id = declencheur.id;

    // Trouver le produit avec l'ID correspondant
    const produitSelectionne = listeCupcake.find(function (produit) {
        return produit.id == id;
    });

    afficherDetails(produitSelectionne);
}



function trier(tableau, critere, direction) {
    let copie = [...tableau];
    copie.sort(function (a, b) {
        if (a[critere] < b[critere]) {
            return direction === "asc" ? -1 : 1;
        } else if (a[critere] > b[critere]) {
            return direction === "asc" ? 1 : -1;
        } else {
            return 0;
        }
    });
    afficherListe(copie);
  }


  // Event Listeners
triAlphabetiqueCroissant.addEventListener("click", function () {
    trier(listeCupcake, "titre", "asc");
  });
  
  triAlphabetiqueDecroissant.addEventListener("click", function () {
    trier(listeCupcake, "titre", "desc");
  });
  
  triPrixCroissant.addEventListener("click", function () {
    trier(listeCupcake, "prix", "asc");
  });

init();