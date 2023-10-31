//Récupérer la navbar
const navbar = document.getElementById('navbar');

const imgImprovise = document.getElementById('imgImprovise');

let beforeScrollPosition = 0;

// Créer un événement au scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Réduire la navbar quand on descend vers le bas,
    if (scrollPosition > beforeScrollPosition ) { 
        navbar.style.height = 60 + 'px';

        // Faire apparaitre l'image de la partie improvise
        imgImprovise.style.opacity = '1';
        imgImprovise.style.transform = 'translate(0,0)';

    //remettre la navbar à sa taille initiale si on remonte tout en haut
    } else {
        navbar.style.height = 90 + 'px';
        imgImprovise.style.opacity = '0';
        imgImprovise.style.transform = 'translateX(-200px)';
    }
})


const popup = document.getElementById('popup');

// Faire apparaitre la popup quand on est en bas du site
window.addEventListener('scroll', function(){
    const popupPosition = window.scrollY;
    const popupHeight = document.getElementById('popup').scrollHeight;
    if(popupHeight > popupPosition) {
      popup.style.opacity ='1';
      popup.style.transform ='translate(0)';
    }});
// Bonus : quand on clicke sur la popup elle disparait pour toujours
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
  popup.style.display = 'none';
});

