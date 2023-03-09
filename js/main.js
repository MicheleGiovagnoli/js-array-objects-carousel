const images = [
    {
        image: 'img/01.jpg',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.jpg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.jpg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.jpg',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

//Seleziono il div imahe-list
const domImageList = document.querySelector('.image-list');
const thumbContainerDom = document.querySelector('.thumb-container');


//Variabile nella quale inseriro il risultato del ciclo
let containerDinamicImage = "";
let thumbContent = "";

//ciclo for per creare dinamicamente le immagini
for(let i = 0; i < images.length; i++) {
    const dinamicImage =    `  <div class="image d-none">
                                    <img class="img" src="${images[i].image}" alt="img">
                                    <div class="text">
                                        <h1>${images[i].title}</h1>
                                        <h2>${images[i].text}</h2>
                                    </div>    
                                </div>
                            `;
    
    const newThumb =    `<div class="thumb-wrapper">
                            <img class="thumb-img" src="${images[i].image}" />
                        </div>
                        `;

     //inserisco il risultato del ciclo
     containerDinamicImage += dinamicImage;   
     thumbContent += newThumb;                
}

//inserisco le immagini create dinamicamente all'interno del div image-list nell'html
domImageList.innerHTML = containerDinamicImage;
thumbContainerDom.innerHTML = thumbContent;

//aggiungo la classe d-none
const domDinamicImage = document.getElementsByClassName('image');
const thumbsDom = document.getElementsByClassName('thumb-wrapper');

for (let i = 0; i < thumbsDom.length; i++) {
    thumbsDom[i].style.height = `calc(100% / ${thumbsDom.length}`;
}

let counter = 0;

domDinamicImage[counter].classList.add('d-block');
thumbsDom[counter].classList.add('active');


domBtnNext = document.querySelector('#btn-next');
domBtnPrev = document.querySelector('#btn-prev');

domBtnNext.addEventListener('click',
    function(){

            domDinamicImage[counter].classList.add('d-none');
            domDinamicImage[counter].classList.remove('d-block');
            thumbsDom[counter].classList.remove('active');
        if (counter == domDinamicImage.length - 1) {
            counter = 0;
        }
        else {
            counter = counter + 1;
        }
            domDinamicImage[counter].classList.remove('d-none');
            thumbsDom[counter].classList.add('active');
    }
 );

 domBtnPrev.addEventListener('click',
    function(){

            thumbsDom[counter].classList.remove('active');
            domDinamicImage[counter].classList.add('d-none');
        if(counter == 0) {
            counter = domDinamicImage.length -1 ;
        }
        else {
            counter--;
        }
            domDinamicImage[counter].classList.remove('d-none');
            thumbsDom[counter].classList.add('active');
    }
 );