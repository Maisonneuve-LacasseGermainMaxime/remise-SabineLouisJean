class carousel {
    constructor(containerHTML,listeImagesCarousel,listeTitreCarousel, listeTexteCarousel){
        // Boite (div) pour le carousel
        this.containerHTML = containerHTML;

        this.imageContainer = this.containerHTML.querySelector(".container-image-principale");
        this.titreContainer = this.containerHTML.querySelector(".carousel-titre");
        this.texteContainer = this.containerHTML.querySelector(".carousel-texte");
        // Tableau d'images
        this.listeImagesCarousel = listeImagesCarousel;
        //Tableau de titres
        this.listeTitreCarousel = listeTitreCarousel;
        // Tableau des textes
        this.listeTexteCarousel = listeTexteCarousel;
        // Index du tableau
        this.position = 0 ; 


        // Pour afficher l'image, le titre et texte du carousel
        let imageAuDepart = this.listeImagesCarousel[this.position];
        this.afficherImage(imageAuDepart);

        let titreAuDepart = this.listeTitreCarousel[this.position];
        this.afficherTitre(titreAuDepart);

        let texteAuDepart = this.listeTexteCarousel[this.position];
        this.afficherTexte(texteAuDepart);

       setInterval (this.avancer.bind(this), 4000);
    }

    afficherImage(source){
        this.imageContainer.src = source;
    }

    afficherTitre(titre){
        this.titreContainer.textContent = titre;
    };

    afficherTexte(texte){
        this.texteContainer.textContent = texte;
    };

    avancer(){
        this.position++;
        if (this.position >= this.listeImagesCarousel.length) {
            this.position = 0;
        }

        let image = this.listeImagesCarousel[this.position];
        let titre = this.listeTitreCarousel[this.position];
        let texte = this.listeTexteCarousel[this.position];

        this.afficherImage(image);
        this.afficherTitre(titre);
        this.afficherTexte(texte);
    }


    reculer(){
        this.position--;
        if (this.position < 0) {
            this.position = this.listeImagesCarousel.length - 1;
        }

        let image = this.listeImagesCarousel[this.position];
        let titre = this.listeTitreCarousel[this.position];
        let texte = this.listeTexteCarousel[this.position];

        this.afficherImage(image);
        this.afficherTitre(titre);
        this.afficherTexte(texte);
    }
        
}


const tableauImagesCarousel = ["assets/img/promo-birthday.jfif","assets/img/promo-donuts.jpg","assets/img/promo-cupcake.jpg"];
const tableauTitreCarousel = ["Bonne Fête!", "6 à 6" , "Le p'tit 2"];
const tableauTexteCarousel = ["Obtenez 50% de rabais sur l'achat d'un gâteau le jour de votre anniversaire.", "Achetez 6 beignes pour 6$, tous les mardis.", "Savourez nos cupcakes à 2$, tous les jeudis."]




let carouselContainer = document.querySelector(".section-carousel");
let premierCarousel = new carousel(carouselContainer, tableauImagesCarousel, tableauTitreCarousel, tableauTexteCarousel);