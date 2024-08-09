let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let preve = document.getElementById('preve');
let next = document.getElementById('next');

let active = 0;
const lengthItems = items.length - 1;

// Fonction pour passer à l'élément suivant
function nextSlide() {
    if (active === lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

// Écouteur d'événements pour le bouton "Suivant"
next.onclick = function() {
    nextSlide();
}

// Écouteur d'événements pour le bouton "Précédent"
preve.onclick = function() {
    if (active === 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

// Fonction pour recharger le carrousel
function reloadSlider() {
    const checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    const lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

// Met en place une transition automatique toutes les 3.5 secondes
setInterval(() => {
    nextSlide();
},3500);